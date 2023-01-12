require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# function to get the results from the database based on the statement
def query_db(sql_statement)
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    result = db.execute sql_statement
    db.close
    result
end

#------------------------------------------------
# PATHS

get '/' do
    erb :home
end

# CREATE
get '/units/add' do 
    erb :unit_add
end

post '/units' do
    query_db "INSERT INTO units (code, name, credit_points, mark, grade) VALUES ('#{params[:code]}', '#{params[:name]}', '#{params[:credit_points]}', '#{params[:mark]}', '#{params[:grade]}')"
    redirect to("/units")
end

# READ 
get '/units' do
    # get all of the units from the database
    @units = query_db "SELECT * FROM units"
    
    erb :units_overview
end

get '/units/:id' do
    unit = query_db "SELECT * FROM units WHERE id=#{params[:id]}"
    @unit = unit.first

    erb :unit_info
end

# UPDATE
get '/units/:id/edit' do
    unit = query_db "SELECT * FROM units WHERE id=#{params[:id]}"
    @unit = unit.first

    erb :unit_edit
end

post '/units/:id' do
    query_db "UPDATE units SET code='#{params[:code]}', name='#{params[:name]}', credit_points='#{params[:credit_points]}', mark='#{params[:mark]}', grade='#{params[:grade]}' WHERE id=#{params[:id]}"
    redirect to("/units/#{params[:id]}")
end

# DELETE
get '/units/:id/delete' do
    query_db "DELETE FROM units WHERE id=#{params[:id]}"
    redirect to("/units")
end


