require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX: list all the national parks on the table 
get '/parks' do
    @parks = query_db 'SELECT * FROM parks'
    erb :parks_index 
end
# NEW: display a form for entering details of a new park
get '/parks/new' do
    erb :parks_new
end 
# CREATE: create a new park in the DB
post '/parks' do 
    query_db "INSERT INTO parks (name, location, image, recommend) VALUES ('#{params[:name]}','#{params[:location]}','#{params[:image]}','#{params[:recommend]}')"

    redirect to('/parks')
end 
# SHOW: display the details of a park
get '/parks/:id' do
    parks = query_db "SELECT * FROM parks WHERE id = #{params[:id]}"
    @park = parks.first 

    erb :parks_show 
end 

# UPDATE: show a form to update the details of an existing park
get '/parks/:id/edit' do
    parks = query_db "SELECT * FROM parks WHERE id = #{params[:id]}"
    @park = parks.first 

    erb :parks_edit
end 

post '/parks/:id' do
    query_db "UPDATE parks SET name = '#{params[:name]}', location = '#{params[:location]}', image='#{params[:image]}',recommend='#{params[:recommend]}' WHERE id='#{params[:id]}'  "

    redirect to("/parks/#{ params[:id]}")

end 

get '/parks/:id/delete' do
    query_db "DELETE FROM parks WHERE id = #{params[:id]}"
    redirect to("/parks")
end 

# function to extract information from the database
def query_db(sql_expression)
    puts sql_expression
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true 

    results = db.execute sql_expression
    db.close 
    results 
end