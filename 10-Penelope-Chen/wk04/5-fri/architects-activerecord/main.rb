require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Tedious configuration: next week, Rails will do this for you automatically.
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: a class that is backed by a database
class Architect < ActiveRecord::Base
end

class Building < ActiveRecord::Base
end

get '/' do
    erb :home
end

# INDEX: show all the architects
get '/architects' do
    @architects = Architect.all
    erb :architects_index
end

# NEW: display a form for entering details about a new architect
get '/architects/new' do
    erb :architects_new
end

# CREATE: insert a new architect into the database
post '/architects' do
    architect = Architect.new
    architect.name = params[:name]
    architect.save
    redirect to("/architects/#{ architect.id }") # GET request -- SHOW
end

# SHOW: show a single architect in more detail
get '/architects/:id' do
    @architect = Architect.find params[:id]
    erb :architects_show
end

# EDIT: show a form to allow the user to edit an existing architect
get '/architects/:id/edit' do
    @architect = Architect.find params[:id]
    erb :architects_edit
end

# UPDATE
post '/architects/:id' do
    architect = Architect.find params[:id]
    architect.name = params[:name]
    architect.save
    redirect to("/architects/#{ params[:id ] }") # GET request to SHOW
end

# DELETE
get '/architects/:id/delete' do
    architect = Architect.find params[:id]
    architect.destroy
    redirect to('/architects')
end

# Building CRUD #######################################################
# INDEX
get '/buildings' do
    @buildings = Building.all
    erb :buildings_index
end

# NEW
get '/buildings/new' do
    erb :buildings_new
end

# CREATE
post '/buildings' do
    building = Building.new
    building.name = params[:name]
    building.image = params[:image]
    building.save
    redirect to("/buildings/#{ building.id }")
end

# SHOW
get '/buildings/:id' do
    @building = Building.find params[:id]
    erb :buildings_show
end

# EDIT
get '/buildings/:id/edit' do
    @building = Building.find params[:id]
    erb :buildings_edit
end

# UPDATE
post '/buildings/:id' do
    building = Building.find params[:id]
    building.name = params[:name]
    building.image = params[:image]
    building.save
    redirect to("/buildings/#{ building.id }")
end

# DELETE
get '/buildings/:id/delete' do
    building = Building.find params[:id]
    building.destroy
    redirect to('/buildings')
end

after do
    ActiveRecord::Base.connection.close # Housekeeping
end