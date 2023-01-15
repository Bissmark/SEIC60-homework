require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'HTTParty'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Sanction < ActiveRecord::Base
end
class Country < ActiveRecord::Base
end
class Country_name < ActiveRecord::Base
end

require 'csv'

module SDN
  @sdn_details_hash = {}
  @sdn_id_hash = {}
  filename = __dir__ + '/data/sdn.csv'
  CSV.foreach(filename) do |row|
    id, name, type, country, title, col_f, col_g, col_h, col_i, col_j, col_k, sdn_details = row
    next if name == "Name"
    @sdn_details_hash[name] = sdn_details
    @sdn_id_hash[name] = id
  end


  def self.sdn_details(name)
    @sdn_details_hash[name]
  end

  def self.sdn_id(name)
    @sdn_id_hash[name]
  end

  @sdn_address_hash = {}
  filename = __dir__ + '/data/sdn_address.csv'
    CSV.foreach(filename) do |row|
      id, col_b, address, city, country = row
      next if id == "ID"
      @sdn_address_hash[id] = address
    end
  
    def self.sdn_address(id)
      @sdn_address_hash[id]
    end

end

$cia_factbook = {}
filename = __dir__ + '/data/cia_factbook.csv'
CSV.foreach(filename, :headers => true, :header_converters => :symbol, :converters => :all) do |row|
    $cia_factbook[row.fields[0]] = Hash[row.headers[1..-1].zip(row.fields[1..-1])]
end



get '/' do
    erb :home
end

get '/sanctions' do
    @sanctions = Sanction.all
    erb :sanctions_index
end

def titleize(str)
    str.split(/ |\_/).map(&:capitalize).join(" ")
end

get '/sanctions/new' do
    erb :sanctions_new
end

post '/sanctions' do
    sanction = Sanction.new
    sanction.name = params[:name]
    sanction.title = params[:title]
    sanction.nationality = titleize(params[:nationality])
    sanction.image = params[:image]
    sanction.save

    if !Country_name.find_by(aka: sanction.nationality.upcase).nil?
        country_name = Country_name.find_by(aka: sanction.nationality.upcase)
        sanction.nationality = titleize(country_name.name)
        sanction.save
    end  

    if Country.find_by(name: sanction.nationality).nil? && !sanction.nationality.empty?
        country = Country.new
        country.name = sanction.nationality
        country.save
    end

    redirect to("/sanctions/#{ sanction.id }")
end






get '/sanctions/:id' do
    @sanction = Sanction.find params[:id]
    @summary =  SDN.sdn_details(@sanction.name)
    @summary = "Not avaliable" if @summary == '-0-' || @summary == nil
    @address = SDN.sdn_address(SDN.sdn_id(@sanction.name))
    @address = @address.strip if @address.instance_of? String
    @address = "Not avaliable" if @address == '-0-' || @address == nil

   
    filename = __dir__ + '/data/prgrmlst.txt'
    prgrmlst_array = File.read(filename).split("\n\n")

    prgrmlst_array.each do |sdn|
        if sdn[0..@sanction.name.length - 1] == @sanction.name
            @summary = sdn
            break
        end
    end


    

    if @sanction.image.empty?
        begin
            your_api_key = 'AIzaSyB78d32yWEekzTclS_gZO9CqWVCMNptHgY'
            # your_cse_id = 'a4f896ad0ae3a429b' # www.google.com
            your_cse_id = '57c3cb0530b3d4750' # www.google.com/imghp?hl=EN*
            images_url = "https://www.googleapis.com/customsearch/v1?key=#{your_api_key}&cx=#{your_cse_id}&q=#{@sanction.name.gsub(' ', '%20').gsub(',', '%20')}%20#{@sanction.nationality.gsub(' ', '%20')}&searchType=image&fileType=jpg"
            images_result = HTTParty.get images_url
            @sanction["image"] = images_result["items"][0]["link"]
            @sanction.save
        rescue
        end
    end
    erb :sanctions_show
end

get '/sanctions/:id/edit' do
    @sanction = Sanction.find params[:id]
    erb :sanctions_edit

end


post '/sanctions/:id' do
    sanction = Sanction.find params[:id]
    previous_nationality = sanction.nationality
    sanction.name = params[:name]
    sanction.title = params[:title]
    sanction.nationality = titleize(params[:nationality])
    sanction.risk = params[:risk]
    sanction.image = params[:image]
    sanction.save

    if !Country_name.find_by(aka: sanction.nationality.upcase).nil?
        country_name = Country_name.find_by(aka: sanction.nationality.upcase)
        sanction.nationality = titleize(country_name.name)
        sanction.save
    end

    if Country.find_by(name: sanction.nationality).nil? && !sanction.nationality.empty?
        country = Country.new
        country.name = sanction.nationality
        country.save
    end

    sanctions = Sanction.all
    sanction_count = 0
    sanctions.each do |sanction|
        sanction_count += 1 if sanction.nationality == previous_nationality
    end
    if sanction_count == 0 && !previous_nationality.empty?
        country = Country.find_by(name: previous_nationality)
        country.destroy
    end


    redirect to("/sanctions/#{ sanction.id }")
end

get '/sanctions/:id/delete' do
    sanction = Sanction.find params[:id]
    sanctions = Sanction.all
    sanction_count = 0
    sanctions.each do |san|
        sanction_count += 1 if san.nationality == sanction.nationality
    end
    if sanction_count == 1
        country = Country.find_by(name: sanction.nationality)
        country.destroy
    end
    sanction.destroy
    redirect to('/sanctions')

end

get '/countries' do
    @countries = Country.all

    @countries.each do |country|
        if country.number_of_sanctions == 0
            country.destroy
        end
    end

    @countries = Country.all

    erb :countries_index
end


def country_info country_name
    begin
    country_url = "https://restcountries.com/v3.1/name/#{country_name.gsub(' ', '%20')}?fullText=true"
    country_details = HTTParty.get country_url
    rescue
        country_details = [{:status => 404,:message => "Not Found"}]
    end
    country_info = {:official_name => "", :native_name => "", :flag => ""}
    if !country_details[0].nil?
        if country_details[0].key?("name")
            if country_details[0]["name"].key?("official")
                country_info[:official_name] = country_details[0]["name"]["official"]
            end
            if country_details[0]["name"].key?("nativeName")
                native_name_list = country_details[0]["name"]["nativeName"].flatten
                native_name_list = native_name_list.drop(2) if native_name_list[0] == "eng" && native_name_list.length > 2
                country_info[:native_name] = native_name_list[1]["official"]
            end
        end
        if country_details[0].key?("flags")
            if country_details[0]["flags"].key?("png")
                country_info[:flag] = country_details[0]["flags"]["png"]
            end
        end
    end
    return country_info
end


get '/countries/:id' do
    @country = Country.find params[:id]
    if @country.official_name == "" || @country.official_name.nil?
        @country.official_name = (country_info @country.name)[:official_name]
        @country.save
    end
    if @country.native_official_name == "" || @country.native_official_name.nil?
        @country.native_official_name = (country_info @country.name)[:native_name]
        @country.save
    end
    if @country.flag == "" || @country.flag.nil?
        @country.flag = (country_info @country.name)[:flag]
        @country.save
    end

    sanctions = Sanction.all
    sanction_count = 0
    sanctions.each do |sanction|
        sanction_count += 1 if sanction.nationality == @country.name
    end
    @country.number_of_sanctions = sanction_count
    @country.save

    erb :countries_show
end

get '/countries/:id/edit' do
    @country = Country.find params[:id]
    erb :countries_edit

end

post '/countries/:id' do
    country = Country.find params[:id]
    country.name = titleize(params[:name])
    country.official_name = params[:official_name]
    country.native_official_name = params[:native_official_name]
    country.flag = params[:flag]
    country.save
    redirect to("/countries/#{ country.id }")
end

get '/countries/:id/delete' do
    country = Country.find params[:id]

    sanctions = Sanction.all
    sanctions.each do |sanction|
        sanction.destroy if sanction.nationality == country.name
    end

    country.destroy
    redirect to('/countries')

end

# binding.irb

get '/country_names' do
    country_names = Country_name.all
    aka_array = []
    aka_keys = {}
    @duplicate_keys = ""
    country_names.each do |country_name|
        aka_array.push country_name.aka 
        aka_keys["#{country_name.aka}"] = 0
    end
    @duplicate =  country_names.length - aka_array.uniq.length
    
    country_names.each do |country_name|
        aka_keys["#{country_name.aka}"] = aka_keys["#{country_name.aka}"] + 1
        if aka_keys["#{country_name.aka}"] > 1
            @duplicate_keys = @duplicate_keys + country_name.aka + ', '
            country_name.destroy
        end
    end 
    @duplicate_keys = @duplicate_keys.chop.chop
    @country_names = Country_name.all

    erb :country_names_index
end

def titleize(str)
    str.split(/ |\_/).map(&:capitalize).join(" ")
end

get '/country_names/new' do
    
    erb :country_names_new
end



post '/country_names' do
    country_name = Country_name.new
    country_name.name = params[:name].upcase
    country_name.aka = params[:aka].upcase
    country_name.save
    redirect to("/country_names")
  

    
end






get '/country_names/:id' do
    @country_name = Country_name.find params[:id]
    
    erb :country_names_show
end

get '/country_names/:id/edit' do
    @country_name = Country_name.find params[:id]
    erb :country_names_edit

end


post '/country_names/:id' do
    country_name = Country_name.find params[:id]
    country_name.name = params[:name].upcase
    country_name.aka = params[:aka].upcase
    country_name.save

    redirect to("/country_names/#{ country_name.id }")
end

get '/country_names/:id/delete' do
    country_name = Country_name.find params[:id]
    country_name.destroy
    redirect to('/country_names')

end