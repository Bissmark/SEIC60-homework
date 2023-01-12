require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do 
    erb :home 
end 

# INDEX: show all playing cards
get '/playing_cards' do
    @playing_cards = query_db "SELECT * FROM playing_cards"
    erb :playing_cards_index
end

# NEW: display a form for entering details about a new playing card 
get '/playing_cards/new' do 
    erb :playing_cards_new
end

# CREATE: insert a new butterfly into the db
post '/playing_cards' do 
    query_db "INSERT INTO playing_cards (name, suit, power, image) VALUES ('#{ params[:name]}', '#{ params[:suit]}','#{ params[:power]}', '#{ params[:image]}')"
    redirect to('/playing_cards') # GET request -- go back to the INDEX
end

# SHOW: show a single playing card in more detail 
get '/playing_cards' do 
    playing_cards = query_db "SELECT * FROM playing_cards WHERE id=#{ params[:id] }"
    @playing_card = playing_cards.first # pluck the single playing card from the array of results
    erb :playing_cards_show
end

# EDIT: show a form to allow the user to edit an existing butterfly
get '/playing_cards/:id/edit' do 
    # get the playing card from the database
    playing_cards = query_db "SELECT * FROM playing_cards WHERE id=#{ params[:id] }" 
    @playing_card = playing_cards.first
    erb :playing_cards_edit
end

# UPDATE
post '/playing_cards/:id' do
    query_db "UPDATE playing_cards SET name='#{ params[:name] }', '#{ params[:suit] }', '#{ params[:power] }', '#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/playing_cards/#{ params["id"] }") # GET request to SHOW
end

# DELETE *
get '/playing_cards/:id/delete' do
    query_db "DELETE FROM playing_cards WHERE id=#{ params[:id] }"
    redirect to('/playing_cards')
end

# Opening & closing new db connection
def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    # Open new db connection
    db = SQLite3::Database.new 'database.sqlite3'
    # Converting db results as hashes
    db.results_as_hash = true
    results = db.execute sql_statement
    # Closing db connection 
    db.close
    results
end