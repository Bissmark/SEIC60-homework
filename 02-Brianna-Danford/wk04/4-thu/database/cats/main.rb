require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do 
    erb :home
end 

# INDEX: show all the kitty's!
get '/cats' do
    @cats = query_db "SELECT * FROM cats"
    erb :cats_index
end

# NEW: new whiskers!
get '/cats/new' do 
    erb :cats_new
end

# CREATE: welcome the kitty into the database
post '/cats' do
    query_db "INSERT INTO cats (name, breed, image) VALUES ('#{ params[:name] }', '#{ params[:breed] }', '#{ params[:image] }')"
    redirect to('/cats')
end 

# SHOW: show a single cat in more detail
get '/cats/:id' do
    cats = query_db "SELECT * FROM cats WHERE id=#{ params[:id]} "
    @cat = cats.first
    erb :cats_show
end

# EDIT: show a form to allow user to edit existing cat
get '/cats/:id/edit' do
    cats = query_db "SELECT * FROM cats WHERE id=#{ params[:id] }"
    @cat = cats.first
    erb :cats_edit
end

post '/cats/:id' do
    query_db "UPDATE cats SET name='#{ params[:name] }', breed='#{ params[:breed] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/cats/#{ params[:id] }")
end

get 'cats/:id/delete' do 
    query_db "DELETE FROM cats WHERE id=#{ params[:id] }"
    redirect to('/cats')
end     

def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end


