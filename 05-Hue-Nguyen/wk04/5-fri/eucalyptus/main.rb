require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# ESTABLISH CONNECTION
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# MODELS
class Plant < ActiveRecord::Base
end

class Status < ActiveRecord::Base
end

#-------------- Plant CRUD ----------------------------------------- #

# HOME
get '/' do
  erb :home
end

# INDEX
get '/plants' do
  @plants = Plant.all

  erb :plants_index
end

# ADD
get '/plants/new' do

  erb :plants_new
end

post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.family = params[:family]
  plant.state = params[:state]
  plant.conservation_status = params[:conservation_status]
  plant.image = params[:image]
  plant.save

  redirect ('/plants')

end

# SHOW
get '/plants/:id' do
  @plant = Plant.find params[:id]

  erb :plants_show
end

# EDIT & UPDATE
get '/plants/:id/edit' do
  @plant = Plant.find params[:id]

  erb :plants_edit
end

post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.name = params[:name]
  plant.family = params[:family]
  plant.state = params[:state]
  plant.conservation_status = params[:conservation_status]
  plant.image = params[:image]
  plant.save

  redirect ("/plants/#{ params[:id]}")
end

# DELETE
get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy

  redirect ('/plants')
end

# -------------Status CRUD ----------------------------------------- #

# INDEX
get '/statuses' do
  @statuses = Status.all

  erb :statuses_index
end

# ADD
get '/statuses/new' do

  erb :statuses_new
end

post '/statuses' do
  status = Status.new
  status.name = params[:name]
  status.code = params[:code]
  status.description = params[:description]
  status.save

  redirect ('/statuses')

end

# SHOW
get '/statuses/:id' do
  @status = Status.find params[:id]

  erb :statuses_show
end

# EDIT & UPDATE
get '/statuses/:id/edit' do
  @status = Status.find params[:id]

  erb :statuses_edit
end

post '/statuses/:id' do
  status = Status.find params[:id]
  status.name = params[:name]
  status.code = params[:code]
  status.description = params[:description]
  status.save

  redirect ("/statuses/#{ params[:id]}")
end

# DELETE
get '/statuses/:id/delete' do
  status = Status.find params[:id]
  status.destroy

  redirect ('/statuses')
end

