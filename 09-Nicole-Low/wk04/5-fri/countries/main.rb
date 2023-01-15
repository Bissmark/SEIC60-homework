require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Country < ActiveRecord::Base
end

get '/' do
    erb :home
end

#--------------------------------------
# COUNTRIES 

# READ
get '/countries' do
    @countries = Country.all
    erb :countries_overview
end

# CREATE
get '/countries/add' do
    erb :countries_add
end

post '/countries' do
    country = Country.new
    country.name = params[:name]
    country.continent = params[:continent]
    country.capital = params[:capital]
    country.flag_image = params[:flag_image]
    country.save
    redirect to("/countries")
end

# READ
get '/countries/:id' do
    @country = Country.find params[:id]
    erb :countries_info
end

# UPDATE
get '/countries/:id/edit' do
    @country = Country.find params[:id]
    erb :countries_edit
end

post '/countries/:id' do
    country = Country.find params[:id]
    country.name = params[:name]
    country.continent = params[:continent]
    country.capital = params[:capital]
    country.flag_image = params[:flag_image]
    country.save
    redirect to("/countries/#{params[:id]}")
end

# DELETE
get '/countries/:id/delete' do
    country = Country.find params[:id]
    country.destroy
    redirect to("/countries")
end

#--------------------------------------
# HOLIDAYS 

class Holiday < ActiveRecord::Base
end

# READ
get '/holidays' do
    @holidays = Holiday.all
    erb :holidays_overview
end

# CREATE
get '/holidays/add' do
    erb :holidays_add
end

post '/holidays' do
    holiday = Holiday.new
    holiday.name = params[:name]
    holiday.date = params[:date]
    holiday.image = params[:image]
    holiday.save
    redirect to ("/holidays")
end

# READ
get '/holidays/:id' do
    @holiday = Holiday.find params[:id]
    erb :holidays_info
end

# UPDATE
get '/holidays/:id/edit' do
    @holiday = Holiday.find params[:id]
    erb :holidays_edit
end

post '/holidays/:id' do
    holiday = Holiday.find params[:id]
    holiday.name = params[:name]
    holiday.date = params[:date]
    holiday.image = params[:image]
    holiday.save
    redirect to ("/holidays/#{params[:id]}")
end

# DELETE
get '/holidays/:id/delete' do
    holiday = Holiday.find params[:id]
    holiday.destroy
    redirect to ("/holidays")
end

after do
    ActiveRecord::Base.connection.close
end

