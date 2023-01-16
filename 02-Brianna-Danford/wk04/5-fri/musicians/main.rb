require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Configuration
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)
# Bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# MODEL: class that is backed up by a database
class Song < ActiveRecord::Base 
end

class Musician < ActiveRecord::Base 
end

get '/' do 
    erb :home
end 

# INDEX: all performers 
get '/musicians' do 
    @musicians = Musician.all
    erb :musicians_index
end 

# NEW: a form for registering new performers
get '/musicians/new' do 
    erb :musicians_new
end 

# CREATE: submit a new performer 
post '/musicians' do 
    musician = Musician.new
    musician.name = params[:name]
    musician.image = params[:image]
    musician.save
    redirect to("/musicians/#{ musician.id }")
end 

# SHOW: show a single plant in more detail
get '/musicians/:id' do 
    @musician = Musician.find params[:id]
    erb :musicians_show
end 

# EDIT: show a form to allow the user to edit and existing plant
get '/musicians/:id/edit' do 
    @musician = Musician.find params[:id]
    erb :musicians_edit
end 

post '/musicians/:id' do 
    musician = Muscian.find params[:id]
    musician.name = params[:name]
    musician.image = params[:image]
    musician.save
    redirect to ("/musicians/#{ musician.id }")
end 

# DELETE 
get '/musicians/:id/delete' do 
    musician = Musician.find params[:id]
    musician.destroy
    redirect to('/musicians')
end     

# SONGS############################ 

# INDEX: 
get '/songs' do 
    # get all butterflies 
    @songs = Song.all
    erb :songs_index
end

get '/songs' do 
    "Hello World"
end


# NEW 
get '/songs/new' do 
    erb :songs_new 
end 

# CREATE 
post '/songs' do 
    song = Song.new
    song.name = params[:name]
    song.album = params[:album]
    song.image = params[:image]
    song.save 
    redirect to("/songs/#{ song.id }")
end 

# SHOW 
get '/songs/:id' do 
    @song = Song.find params[:id]
    erb :songs_show
end 

# EDIT

get '/songs/:id/edit' do 
    @song = Song.find params[:id]
    erb :songs_edit
end 

# UPDATE 
post '/songs/:id' do 
    song = song.find params[:id]
    song.name = params[:name]
    song.album = params[:album]
    song.image = params[:image]
    song.save
    redirect to("/songs/#{ song.id }")
end 

# DELETE 
get '/songs/:id/delete' do 
    song = Song.find params[:id]
    song.destroy
    redirect to('/songs')
end 

after do 
    ActiveRecord::Base.connection.close
end 