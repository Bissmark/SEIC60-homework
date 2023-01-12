require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

get '/ants' do
    @ants = query_db "SELECT * FROM ants"
    erb :ants_index
end

get '/ants/new' do
    erb :ants_new
end

post '/ants' do
    query_db "INSERT INTO ants (name, colour, origin, bites, image) VALUES ('#{params[:name]}', '#{params[:colour]}', '#{params[:origin]}', '#{params[:bites]}', '#{params[:image]}')"
    redirect to("/ants")
end

get '/ants/:id' do
    ants = query_db "SELECT * FROM ants WHERE id=#{params[:id] }"
    @ant = ants.first
    erb :ants_show
end

get '/ants/:id/edit' do
    ants = query_db "SELECT * FROM ants WHERE id=#{params[:id] }"
    @ant = ants.first
    erb :ants_edit
end

post '/ants/:id' do
    query_db "UPDATE ants SET name='#{params[:name]}', colour='#{params[:colour]}', origin='#{params[:origin]}', bites='#{params[:bites]}', image='#{params[:image]}' WHERE id=#{params[:id] }"
    redirect to("/ants/#{ params[:id]}")
end

get '/ants/:id/delete' do
    query_db "DELETE FROM ants WHERE id=#{ params[:id] }"
    redirect to('/ants')
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end