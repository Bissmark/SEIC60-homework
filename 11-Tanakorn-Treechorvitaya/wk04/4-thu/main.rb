require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# reference detail: https://web.pa.msu.edu/people/horvatin/Astronomy_Facts/brightest_stars.html#:~:text=20,1.25

# reference picture: 

# Home
get '/' do
    erb :home
end

# Show list
get '/brightest_stars' do
    @brightest_stars = query_db( "SELECT * FROM brightest_stars")
    erb :brightest_stars_list
end

# Add new Star
get '/brightest_stars/new' do
    erb :brightest_stars_new
end

post '/brightest_stars' do
    query_db "INSERT INTO brightest_stars (name, astronomicalname, meaning, distance, apparentmagitude, absolutemagnitude, image) VALUES ('#{ params[:name] }','#{ params[:astronomicalname] }','#{ params[:meaning] }','#{ params[:distance] }','#{ params[:apparentmagitude] }','#{ params[:absolutemagnitude] }','#{ params[:image] }')"
    redirect to ('/brightest_stars')
end

# Show star in more detail
get '/brightest_stars/:id' do
    stars = query_db( "SELECT * FROM brightest_stars where id = #{ params[:id] }" )
    @star = stars.first 
    erb :brightest_stars_detail
end

# Edit
get '/brightest_stars/:id/edit' do
    stars = query_db( "SELECT * FROM brightest_stars where id = #{ params[:id] }" )
    @star = stars.first 
    erb :brightest_stars_edit
end

post '/brightest_stars/:id' do
    query_db "UPDATE brightest_stars SET name='#{ params[:name] }' , astronomicalname='#{ params[:astronomicalname] }', meaning='#{ params[:meaning] }', distance='#{ params[:distance] }', apparentmagitude='#{ params[:apparentmagitude] }', absolutemagnitude='#{ params[:absolutemagnitude] }', image='#{ params[:image] }' WHERE id=#{params[:id]}"
    redirect to("/brightest_stars/#{params[:id]}")
end

# Delete
get '/brightest_stars/:id/delete' do
    query_db "DELETE FROM brightest_stars WHERE id=#{ params[:id] }"
    redirect to('/brightest_stars')
end

# create function
def query_db(sql_statement)
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end