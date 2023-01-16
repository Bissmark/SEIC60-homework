require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.carmakemodel'
)

class Car < ActiveRecord::Base
end

class Brand < ActiveRecord::Base
end

get '/' do 
    erb :home
end

# Cars --------------------------------------------------------------------

# INDEX:
get '/cars' do
    @cars = Car.all
    erb :cars_index
end

# NEW:
get '/cars/new' do
    erb :cars_new
end

# CREATE:
post '/cars' do 
    car = Car.new
    car.name = params[:name]
    car.parent_brand = params[:parent_brand]
    car.image = params[:image]
    car.save
    redirect to("/cars/#{car.id}")
end

#  SHOW:
get '/cars/:id' do
    @car = Car.find params[:id]
    erb :cars_show
end

# EDIT:
get '/cars/:id/edit' do 
    @car = Car.find params[:id]
    erb :cars_edit
end

# POST:
post '/cars/:id' do 
    car = Car.find params[:id]
    car.name = params[:name]
    car.parent_brand = params[:parent_brand]
    car.image = params[:image]
    car.save
    redirect to("/cars/#{params[:id]}")
end

# DELETE: 
get '/cars/:id/delete' do 
    car = Car.find params[:id]
    car.destroy
    redirect to('/cars')
end

# Brands --------------------------------------------------------------------

# Index:
get '/brands' do
    @brands = Brand.all
    erb :brands_index
end

# NEW:
get '/brands/new' do
    erb :brands_new
end

# CREATE:
post '/brands' do
    brand = Brand.new
    brand.name = params[:name]
    brand.origin = params[:origin]
    brand.logo = params[:logo]
    brand.save
    redirect to("/brands/#{ brand.id }")
end

#  SHOW:
get '/brands/:id' do
    @brand = Brand.find params[:id]
    erb :brands_show
end

# EDIT:
get '/brands/:id/edit' do 
    @brand = Brand.find params[:id]
    erb :brands_edit
end

# UPDATE/POST:
post '/brands/:id' do 
    brand = Brand.find params[:id]
    brand.name = params[:name]
    brand.origin = params[:origin]
    brand.logo = params[:logo]
    brand.save
    redirect to("/brands/#{brand.id}")
end

# DELETE:
get '/brands/:id/delete' do 
    brand = Brand.find params[:id]
    brand.destroy
    redirect to('/brands')
end

# Housekeeping --------------------------------------------------------------
after do
    ActiveRecord::Base.connection.close 
end