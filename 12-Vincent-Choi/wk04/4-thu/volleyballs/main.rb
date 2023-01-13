require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# SOMETHING FOR THE DATABASE 

# INDEX
get '/volleyballs' do
    @volleyball = query_db "SELECT * FROM volleyballs"
    erb :volleyballs_index
end

# NEW: display a form for entering details about a new volleyball
get '/volleyballs/new' do
    erb :volleyballs_new
end

# CREATE: insert a new volleyballs into the database

post '/volleyballs' do
    query_db "INSERT INTO volleyballs (name, country, position, number, image) VALUES ('#{ params[:name] }', '#{ params[:country] }', '#{ params[:position] }', '#{ params[:number] }', '#{ params[:image] }')"
    redirect to('/volleyballs') # GET request -- go back to the INDEX
end

# SHOW: show a single volleyballs in more detail
get '/volleyballs/:id' do
    volleyballs = query_db "SELECT * FROM volleyballs WHERE id=#{ params[:id] }"
    @volleyball = volleyballs.first # pluck the single volleyball from the array of results
    erb :volleyballs_show
end

# EDIT: show a form to allow the user to edit an existing volleyball
get '/volleyballs/:id/edit' do
    # get the volleyball from the database
    volleyballs = query_db "SELECT * FROM volleyballs WHERE id=#{ params[:id] }"
    @volleyball = volleyballs.first
    erb :volleyballs_edit
end

post '/volleyballs/:id' do
    query_db "UPDATE volleyballs SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/volleyballs/#{ params[:id ] }") # GET request to SHOW
end

get '/volleyballs/:id/delete' do
    query_db "DELETE FROM volleyballs WHERE id=#{ params[:id] }"
    redirect to('/volleyballs')
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end