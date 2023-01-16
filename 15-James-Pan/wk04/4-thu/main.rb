require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

get '/characters' do
    @characters = query_db "SELECT * FROM characters"
    erb :characters_index
end

get '/characters/new' do
    erb :characters_new
end

post '/characters' do
    query_db "INSERT INTO characters (name, ability, image) VALUES ('#{ params[:name] }', '#{ params[:ability] }', '#{ params[:image] }') "
    redirect to ('/characters')
end

get '/characters/:id' do
    characters = query_db "SELECT * FROM characters WHERE id=#{ params[:id] }"
    @character = characters.first
    erb :characters_show
end

get '/characters/:id/edit' do
    characters = query_db "SELECT * FROM characters WHERE id=#{ params[:id] }"
    @character = characters.first
    erb :characters_edit
end

post '/characters/:id' do
    query_db "UPDATE characters SET name='#{ params[:name] }', ability='#{ params[:ability] }' , image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to ("/characters/#{ params[:id] }")
end

get '/characters/:id/delete' do
    query_db "DELETE FROM characters WHERE id=#{ params[:id] }"
    redirect to ('/characters')
end

def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end

