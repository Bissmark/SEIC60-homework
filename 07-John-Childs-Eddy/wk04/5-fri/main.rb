require 'sinatra'
require 'sinatra/reloader'
require 'active_record'


ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

# Model declaration: a class that is backed by a database
class Author < ActiveRecord::Base
end

class Book < ActiveRecord::Base
end

# HOMEPAGE use GET to display 'home' page at url '/'

get '/' do
    erb :home
end

##############################################################################
# Authors CRUD ###############################################################
##############################################################################

# INDEX
get '/authors' do
    # get all the authors from the db and render the page
    @authors = Author.all
    erb :authors_index
end

# NEW: Form to accept new author - render the page using authors_new from the url authors/new
get '/authors/new' do
    erb :authors_new
end

# CREATE: insert a new author into the database
post '/authors' do
    author = Author.new
    author.name = params[:name]
    author.image = params[:image]
    author.save
    redirect to("/authors/#{ author.id }")
end

# SHOW: render a page to show the details of an author
get '/authors/:id' do
    @author = Author.find params[:id]
    erb :authors_show
end

# EDIT: do a get to edit the author
get '/authors/:id/edit' do
    @author = Author.find params[:id]
    @author.inspect
    erb :authors_edit
end

# UPDATE do a post to update using the :id - and then redirect without rendering a page
post '/authors/:id' do
    author = Author.find params[:id]
    author.name = params[:name]
    author.image = params[:image]
    author.save
    redirect to("/authors/#{ author.id }")
end

# DELETE use a get to get the record and then delete - then redirect to home page
get '/authors/:id/delete' do
    author = Author.find params[:id]
    author.destroy
    redirect to('/authors')
end

##############################################################################
# Books CRUD #################################################################
##############################################################################

# INDEX
get '/books' do
    # get all the books from the db and render the page
    @books = Book.all
    erb :books_index
end

# NEW: Form to accept new book - render the page using books_new from the url books/new
get '/books/new' do
    erb :books_new
end

# CREATE: insert a new book into the database
post '/books' do
    book = Book.new
    book.name = params[:name]
    book.image = params[:image]
    book.save
    redirect to("/books/#{ book.id }")
end

# SHOW: render a page to show the details of an book
get '/books/:id' do
    @book = Book.find params[:id]
    erb :books_show
end

# EDIT: do a get to edit the book
get '/books/:id/edit' do
    @book = Book.find params[:id]
    @book.inspect
    erb :books_edit
end

# UPDATE do a post to update using the :id - and then redirect without rendering a page
post '/books/:id' do
    book = Book.find params[:id]
    book.name = params[:name]
    book.image = params[:image]
    book.save
    redirect to("/books/#{ book.id }")
end

# DELETE use a get to get the record and then delete - then redirect to home page
get '/books/:id/delete' do
    book = Book.find params[:id]
    book.destroy
    redirect to('/books')
end



