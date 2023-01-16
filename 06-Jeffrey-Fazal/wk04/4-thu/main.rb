require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def query_db(sql_statment)
    puts sql_statment # Debug String
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statment
    db.close
    results
end

get '/' do
    erb :home
end

# Index
get '/people' do
    @people = query_db "SELECT * FROM contacts"
    binding.irb
    erb :people_index
end

# New
get '/people/new' do
    erb :people_new
end

# Create
post '/people' do
    query_db "INSERT INTO contacts (fullName, preferredName, photo, city, employer, valueEstimate) VALUES('#{ params[:fullName] }', '#{ params[:preferredName] }', '#{ params[:photo] }', '#{ params[:city] }', '#{ params[:employer] }', #{ params[:valueEstimate] })"
    redirect to('/people') # GET request -> home
end

# Show single people

get 'people/:id' do # Example of Dynamic path
    people = query_db "SELECT * FROM people WHERE id=#{ params[:id] }"
    @people = people.first
    erb :people_show
end

# Edit
get '/people/:id/edit' do
    people = query_db "SELECT * FROM people WHERE id=#{ params[id]}"
    @people = people.first
    erb :people_edit
end

post 'people/:id' do
    query_db "#UPDATE butterflies SET fullName='#{ params[:fullName] }', preferredName='#{params[:preferredName]}', photo='#{params[:photo]}', params='#{params[:photo]}', city='#{params[:city]}', employer='#{params[:employer]}', valueEstimate='#{params=[:valueEstimate]}' WHERE id=#{params [:id] }"

    redirect to("/people/#{ params [:id]}") # Get -> Show
end

get '/people/:id/delete' do
    query_db "DELETE FROM contacts WHERE id=#{:id}"
    redirect to('/people')
end