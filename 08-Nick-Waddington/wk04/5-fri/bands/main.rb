require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

## Model: a class that is backed by a databse
class Band < ActiveRecord::Base
    has_many :albums
end

# Migration
class CreateBands < ActiveRecord::Migration[5.0]
    def change
        create_table :bands do |t|
            t.string :name
            t.integer :members
            t.text :genre
            t.integer :formed
            t.boolean :active
            t.text :image
        end

        Band.create name:"Red Hot Chili Peppers",
                    members: 4,
                    genre: "Rock",
                    formed: 1983,
                    active:true

        create_table :albums do |t|
            t.belongs_to :band, index: true
            t.text :name
            t.integer :release
            t.integer :tracks
            t.float :length
            t.text :genre
            t.text :image

        Album.create name: "Mother's Milk",
                     release: 1989,
                     tracks: 13
        end
    end
end



#HOMEPAGE
get '/' do
    erb :home
end

# Bands CRUD -------------------------

# INDEX
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
    # album.band = params[:band]
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
    # album.band = params[:band]
    album.release = params[:release]
    album.tracks = params[:tracks]
    album.length = params[:length]
    album.genre = params[:genre]
    album.image = params[:image]
    album.save

    redirect to("/albums/#{ params[:id] }")
end

#DELETE
get "/albums/:id/delete" do
    album = Album.find params[:id]
    album.destroy
    redirect to("/albums")
end