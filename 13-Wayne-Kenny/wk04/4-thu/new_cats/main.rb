require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do 
    erb :home
end

# INDEX
get '/cats' do
    @cats = query_db "SELECT * FROM cats"
    erb :cats_index
end

# NEW
get '/cats/new' do
    erb :cats_new
end

# CREATE
post '/cats' do 
    query_db "INSERT INTO cats (name, breed, sex, image) VALUES ('#{params[:name]}', '#{params[:breed]}', '#{params[:sex]}', '#{params[:image]}')"
    redirect to('cats')
end

# SHOW
get '/cats/:id' do
    cats = query_db "SELECT * FROM cats WHERE id=#{params[:id]}"
    @cat = cats.first
    erb :cats_show
end

# EDIT
get '/cats/:id/edit' do 
    cats = query_db "SELECT * FROM cats WHERE id=#{params[:id]}"

    @cat = cats.first
    erb :cats_edit
end

# EDIT / POST
post '/cats/:id' do
    query_db "UPDATE cats SET name='#{params[:name]}', breed='#{params[:breed]}', sex='#{params[:sex]}', image='#{params[:image]}'
    WHERE id=#{params[:id]}"
    redirect to("/cats/#{params[:id]}")
end

# DELETE
get '/cats/:id/delete' do
    query_db "DELETE FROM cats WHERE id=#{params[:id]}"
    redirect to('cats')
end

def query_db(sql_statement)
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end