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
class Person < ActiveRecord::Base
end

class Organisation < ActiveRecord::Base
end

# class Person < Organisation
# end

get '/' do
    erb :home
end

# INDEX: show all the butterflies
get '/people' do
    @people = Person.all
    erb :people_index
end

# # NEW: display a form for entering details about a new butterfly
# get '/butterflies/new' do
#     erb :butterflies_new
# end

# # CREATE: insert a new butterfly into the database
# post '/butterflies' do
#     butterfly = Butterfly.new
#     butterfly.name = params[:name]
#     butterfly.family = params[:family]
#     butterfly.image = params[:image]
#     butterfly.save
#     redirect to("/butterflies/#{ butterfly.id }") # GET request -- SHOW
# end

# # SHOW: show a single butterfly in more detail
# get '/butterflies/:id' do
#     @butterfly = Butterfly.find params[:id]
#     erb :butterflies_show
# end

# # EDIT: show a form to allow the user to edit an existing butterfly
# get '/butterflies/:id/edit' do
#     @butterfly = Butterfly.find params[:id]
#     erb :butterflies_edit
# end

# # UPDATE
# post '/butterflies/:id' do
#     butterfly = Butterfly.find params[:id]
#     butterfly.name = params[:name]
#     butterfly.family = params[:family]
#     butterfly.image = params[:image]
#     butterfly.save
#     redirect to("/butterflies/#{ params[:id ] }") # GET request to SHOW
# end

# # DELETE
# get '/butterflies/:id/delete' do
#     butterfly = Butterfly.find params[:id]
#     butterfly.destroy
#     redirect to('/butterflies')
# end

# # Plants CRUD #######################################################
# # INDEX
# get '/plants' do
#     @plants = Plant.all
#     erb :plants_index
# end

# # NEW
# get '/plants/new' do
#     erb :plants_new
# end

# # CREATE
# post '/plants' do
#     plant = Plant.new
#     plant.name = params[:name]
#     plant.image = params[:image]
#     plant.save
#     redirect to("/plants/#{ plant.id }")
# end

# # SHOW
# get '/plants/:id' do
#     @plant = Plant.find params[:id]
#     erb :plants_show
# end

# # EDIT
# get '/plants/:id/edit' do
#     @plant = Plant.find params[:id]
#     erb :plants_edit
# end

# # UPDATE
# post '/plants/:id' do
#     plant = Plant.find params[:id]
#     plant.name = params[:name]
#     plant.image = params[:image]
#     plant.save
#     redirect to("/plants/#{ plant.id }")
# end

# # DELETE
# get '/plants/:id/delete' do
#     plant = Plant.find params[:id]
#     plant.destroy
#     redirect to('/plants')
# end

after do
    ActiveRecord::Base.connection.close # Housekeeping
end
