require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

##Model: a class that is backed by a databse
class Band < ActiveRecord::Base
end

class Album < ActiveRecord::Base
end

#HOMEPAGE
get '/' do
    erb :home
end

#Bands CRUD -------------------------

#INDEX
get '/bands' do
    @bands = Band.all
    erb :bands_index
end

#NEW
get '/bands/new' do
    erb :bands_new
end

#CREATE
post "/bands" do
    band = Band.new
    band.name = params[:name]
    band.members = params[:members]
    band.genre = params[:genre]
    band.formed = params[:formed]
    band.active = params[:active]
    band.image = params[:image]
    band.save

    redirect to("/bands/#{ band.id }")
end

#SHOW
get "/bands/:id" do
    @band = Band.find params[:id]
    erb :bands_show
end

#EDIT
get "/bands/:id/edit" do
    @band = Band.find params[:id]
    erb :bands_edit
end

#UPDATE
post "/bands/:id" do
    band = Band.find params[:id]
    band.name = params[:name]
    band.members = params[:members]
    band.genre = params[:genre]
    band.formed = params[:formed]
    band.active = params[:active]
    band.image = params[:image]
    band.save

    redirect to("/bands/#{ params[:id] }")
end

get "/bands/:id/delete" do
    band = Band.find params[:id]
    band.destroy
    redirect to("/bands")
end

# Albums CRUD ----------------------

#INDEX
get '/albums' do
    @albums = Album.all
    erb :albums_index
end

#NEW
get '/albums/new' do
    erb :albums_new
end

#CREATE
post "/albums" do
    album = Album.new
    album.name = params[:name]
    album.band = params[:band]
    album.release = params[:release]
    album.tracks = params[:tracks]
    album.length = params[:length]
    album.genre = params[:genre]
    album.image = params[:image]
    album.save

    redirect to("/albums/#{ album.id }")
end

#SHOW
get "/albums/:id" do
    @album = Album.find params[:id]
    erb :albums_show
end

#EDIT
get "/albums/:id/edit" do
    @album = Album.find params[:id]
    erb :albums_edit
end

#UPDATE
post "/albums/:id" do
    album = Album.find params[:id]
    album.name = params[:name]
    album.band = params[:band]
    album.release = params[:release]
    album.tracks = params[:tracks]
    album.length = params[:length]
    album.genre = params[:genre]
    album.image = params[:image]
    album.save

    redirect to("/albums/#{ params[:id] }")
end

get "/albums/:id/delete" do
    album = Album.find params[:id]
    album.destroy
    redirect to("/albums")
end