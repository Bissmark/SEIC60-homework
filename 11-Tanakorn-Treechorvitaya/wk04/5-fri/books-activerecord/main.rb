require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Tedious configuration: nect week, Rails will do this for you automatically
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
) 

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: a class that is backed by a database
class Book < ActiveRecord::Base 
    belongs_to :author, :optional => true
    # we can use single for this and table will be plural, it will be connected
    # e.g. person : class and people : table
end

class Author < ActiveRecord::Base
    has_many :books
end

get '/' do
    erb :home
end

# INDEX: show all the butterflies
get '/books' do
    @books = Book.all
    erb :books_index
    # we can use inspect to see it as String using inspect
end

# NEW: display a form for entering details about new butterfly
get '/books/new' do
    erb :books_new
end

# CREATE: insert a new butterfly into the database
post '/books' do
    # insert the butterfly into the database

    book =Book.new
    book.name = params[:name]
    book.family = params[:family]
    book.image = params[:image]
    book.save # automatically assign an ID
    # show them that it worked
    redirect to ("/books/#{ book.id }") # GET request -- go back to the INDEX
end

# Show: show a single butterfly in more detail

get '/books/:id' do
    @book = Book.find params[:id] # do not have to worry about array as Rail do it for us
    erb :books_show
    # @butterfly.inspect # return the string so we can check as it is the last line of the code
end

# EDIT: show a form to allow the user to edit an existing butterfly
get '/books/:id/edit' do
    # get the butterfly from the database
    @book = Book.find params[:id]
    # render a form to edit that b
    erb :books_edit
end

post '/books/:id' do
    book = Book.find params[:id]
    book.name = params[:name]
    book.family = params[:family]
    book.image = params[:image]
    book.save # it know that we create or update
    redirect to("/books/#{params[:id]}") # get request to SHOW
end

get '/books/:id/delete' do
    book = Book.find params[:id]
    book.destroy
    redirect to('/books')
end

# Authors CRUD #########################################################
# INDEX
get '/authors' do
    @authors = Author.all
    binding.irb
    erb :authors_index
end

# NEW
get '/authors/new' do
    erb :authors_new
end

# CREATE
post '/authors' do
    author = Author.new
    author.name = params[:name]
    author.image = params[:image]
    author.save
    redirect to("/authors/#{ author.id}")
end

# SHOW
get '/authors/:id' do
    @author = Author.find params[:id]
    erb :authors_show
end

# EDIT
get '/authors/:id/edit' do
    @author = Author.find param[:id]
    erb :authors_edit
end

# UPDATE
post '/authors/:id' do
    author = Author.find param[:id]
    author.name = params[:name]
    author.image = params[:image]
    author.save
    redirect to("/authors/#{ author.id }")
end

# DELETE
get '/authors/:id/delete' do
    author = Author.find params[:id]
    author.destroy
    redirect to('/authors')
end

after do 
    ActiveRecord::Base.connection.close #Housekeeping ensure we do not run out of connection
end