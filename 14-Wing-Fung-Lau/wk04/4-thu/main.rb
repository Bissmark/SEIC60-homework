require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'



def query_db sql_statement
    puts "=" * 25
    puts sql_statement
    puts "=" * 25
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end




get '/' do
    erb :home
end

get '/sanctions' do
    @sanctions = query_db "SELECT * FROM sanctioned_persons"
    erb :sanctions_index
end


get '/sanctions/new' do
    erb :sanctions_new
end

post '/sanctions' do
    sanctions = query_db "INSERT INTO sanctioned_persons (name, title, nationality, risk, image) VALUES ('#{params[:name]}', '#{params[:title]}', '#{params[:nationality]}', '#{params[:risk]}', '#{params[:image]}')"
    redirect to('/sanctions')
end

get '/sanctions/:id' do
    sanctions = query_db "SELECT * FROM sanctioned_persons where id=#{params[:id]}"
    @sanction = sanctions[0]
    erb :sanctions_show
end

get '/sanctions/:id/edit' do
    sanctions = query_db "SELECT * FROM sanctioned_persons WHERE id=#{params[:id]}"
    @sanction = sanctions[0]
    erb :sanctions_edit

end

post '/sanctions/:id' do
    sanctions = query_db "UPDATE sanctioned_persons SET name='#{params[:name]}', title='#{params[:title]}', nationality='#{params[:nationality]}', risk='#{params[:risk]}', image='#{params[:image]}' WHERE id = #{params[:id]}"
    redirect to("/sanctions/#{params[:id]}")
end

get '/sanctions/:id/delete' do
    sanctions = query_db "DELETE FROM sanctioned_persons WHERE id=#{params[:id]}"
    erb :sanctions

end