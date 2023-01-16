require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Configuration 

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: Backed by database
class Slamdunk < ActiveRecord::Base
end

class Moves < ActiveRecord::Base
end

get '/' do
    erb :home
end

# INDEX
get '/slamdunks' do
    @slamdunks = Slamdunk.all
    erb :slamdunks_index
end

# NEW: display a form for entering details about a new slamdunk
get '/slamdunks/new' do
    erb :slamdunks_new
end

# CREATE: insert a new slamdunk into the database
post '/slamdunks' do
    slamdunk = Slamdunk.new
    slamdunk.name = params[:name]
    slamdunk.family = params[:family]
    slamdunk.image = params[:image]
    slamdunk.save
    redirect to("/slamdunks/#{ slamdunk.id }") # GET request -- SHOW
end

# SHOW: show a single slamdunk in more detail
get '/slamdunks/:id' do
    @slamdunk = Slamdunk.find params[:id]
    erb :slamdunks_show
end

# EDIT: show a form to allow the user to edit an existing slamdunk
get '/slamdunks/:id/edit' do
    @slamdunk = Slamdunk.find params[:id]
    erb :slamdunks_edit
end

# UPDATE
post '/slamdunks/:id' do
    slamdunk = Slamdunk.find params[:id]
    slamdunk.name = params[:name]
    slamdunk.family = params[:family]
    slamdunk.image = params[:image]
    slamdunk.save
    redirect to("/slamdunks/#{ params[:id ] }") # GET request to SHOW
end

# DELETE
get '/slamdunks/:id/delete' do
    slamdunk = Slamdunk.find params[:id]
    slamdunk.destroy
    redirect to('/slamdunks')
end

# Moves CRUD #######################################################

# INDEX
get '/moves' do
    @moves = Move.all
    erb :moves_index
end

# NEW
get '/moves/new' do
    erb :moves_new
end

# CREATE
post '/moves' do
    move = Move.new
    move.name = params[:name]
    move.type = params[:type]
    move.description = params[:description]
    move.image = params[:image]
    move.save
    redirect to("/moves/#{ move.id }")
end

# SHOW
get '/moves/:id' do
    @moves = Move.find params[:id]
    erb :moves_show
end

# EDIT
get '/moves/:id/edit' do
    @moves = Move.find params[:id]
    erb :moves_edit
end

# UPDATE
post '/moves/:id' do
    move = Move.find params[:id]
    move.name = params[:name]
    move.image = params[:image]
    move.save
    redirect to("/moves/#{ move.id }")
end

# DELETE
get '/moves/:id/delete' do
    move = Move.find params[:id]
    move.destroy
    redirect to('/moves')
end

after do
    ActiveRecord::Base.connection.close # Housekeeping
end