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
class Character < ActiveRecord::Base
end

class Skill < ActiveRecord::Base
end

get '/' do
    erb :home
end

# INDEX: show all the characters
get '/characters' do
    @characters = Character.all
    erb :characters_index
end

# NEW: display a form for entering details about a new Character
get '/characters/new' do
    erb :characters_new
end

# CREATE: insert a new Character into the database
post '/characters' do
    character = Character.new
    character.name = params[:name]
    character.region = params[:region]
    character.image = params[:image]
    character.save
    redirect to("/characters/#{ character.id }") # GET request -- SHOW
end

# SHOW: show a single Character in more detail
get '/characters/:id' do
    @character = Character.find params[:id]
    erb :characters_show
end

# EDIT: show a form to allow the user to edit an existing Character
get '/characters/:id/edit' do
    @character = Character.find params[:id]
    erb :characters_edit
end

# UPDATE
post '/characters/:id' do
    character = Character.find params[:id]
    character.name = params[:name]
    character.region = params[:region]
    character.image = params[:image]
    character.save
    redirect to("/characters/#{ params[:id ] }") # GET request to SHOW
end

# DELETE
get '/characters/:id/delete' do
    Character = Character.find params[:id]
    Character.destroy
    redirect to('/characters')
end

# Skills CRUD #######################################################
# INDEX
get '/skills' do
    @skills = Skill.all
    erb :skills_index
end

# NEW
get '/skills/new' do
    erb :skills_new
end

# CREATE
post '/skills' do
    skill = Skill.new
    skill.name = params[:name]
    skill.image = params[:image]
    skill.save
    redirect to("/skills/#{ skill.id }")
end

# SHOW
get '/skills/:id' do
    @skill = Skill.find params[:id]
    erb :skills_show
end

# EDIT
get '/skills/:id/edit' do
    @skill = Skill.find params[:id]
    erb :skills_edit
end

# UPDATE
post '/skills/:id' do
    skill = Skill.find params[:id]
    skill.name = params[:name]
    skill.image = params[:image]
    skill.save
    redirect to("/skills/#{ skill.id }")
end

# DELETE
get '/skills/:id/delete' do
    skill = Skill.find params[:id]
    skill.destroy
    redirect to('/skills')
end

after do
    ActiveRecord::Base.connection.close # Housekeeping
end