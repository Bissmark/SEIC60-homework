require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# GET requests to the root path. No connection to the database is required here.
get '/' do
    erb :home
end

# GET requests to the snowboards path - this will be the INDEX PAGE of all records in the snowboards table
get 'snowboard' do
    @all_snowboardtricks = query_db "SELECT * FROM snowboard"

    # render the snowboard_index erb template (this will look for a file called snowboard_index.erb in our views folder)
    erb :snowboard_index
end

# GET requests to the /snowboardtricks_new poath. No connection to the datbase is required here - it's just a bunch of form fields
get 'snowboard/new' do
    # render the snowboardtricks_new erb tempate (this will look for a file called snowboardtricks_new.erb in our views folder). This will be the form for setting the attributes for a new snowboardtricks record.
    erb :snowboard_new
end

# POST requests to the snowboardtrick_new path - this will add a new records to the snowboard table in the database, taking the data from the form in the snowboardtricks_new view
post 'snowboard' do
    query_db "INSERT INTO snowboard (name, trick, image) VALUES ('#{ params[:name] }', '#{ params[:trick] }', '#{ params[:image] }')"
    redirect to('/snowboard') # GET request -- go back to the INDEX
end

# SHOW: show a snowboard trick in more detail
get '/snowboard/:id' do
    # get a snowboard trick from the db
    snowboarding = query_db "SELECT * FROM snowboard WHERE id=#{ params[:id] }" 
    @showsnowboarding = snowboarding.first
    
    # render a page to show that snowboard trick
    erb :snowboard_show
end

# GET requests to the /snowboard/:id/edit path - this will render the form to update the attributes of an existing record in the snowboard table. we DO need a database connection here, since we want to retrieve the records attributes to display them in the form (so the user knows what they're editing)
get '/snowboard/:id/edit' do
    snowboards = query_db "SELECT * FROM snowboard WHERE id=#{ params[:id] }" 
    @showsnowboard = snowboards.first
    @showsnowboard.inspect
    # render the snowboard_edit erb template (this will look for a file called snowboard_edit.erb in our views folder)
    erb :snowboard_edit
end

# POST 
post '/snowboard/:id/' do
    query_db "UPDATE snowboard SET name='#{ params[:name] }', trick='#{ params[:trick] }', image='#{ params[:image] }'
    WHERE id= #{ params[:id] }"
    # we don't want to render a view here - we want to redirect to the snowboard tricks views page after updating the snowboard trick information
    redirect to("/snowboard/#{ params[:id] }")
end

# GET requests to the delete path for a snowboard trick
get '/snowboard/:id/delete' do
    query_db "DELETE FROM snowboard WHERE id=#{ params[:id] }" 
    # redirect to the GET '/snowboard' route which displays the snowboard_index page
    redirect to('/snowboard')
end

# FIRST AND ONLY FUNCTION - QUERY THE DB AND PASS IN SQL STATEMENT AS ARGUMENT
def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end