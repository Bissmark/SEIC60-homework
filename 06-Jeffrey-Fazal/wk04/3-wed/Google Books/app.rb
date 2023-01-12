require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

configure do
  enable :sessions
end

helpers do
  def username
    session[:identity] ? session[:identity] : 'Join bookclub'
  end
end

before '/secure/*' do
  unless session[:identity]
    session[:previous_url] = request.path
    @error = 'Sorry, you need to be logged in to visit ' + request.path
    halt erb(:login_form)
  end
end

get '/' do
  erb :home
end

get '/book' do
  @search_book = params[:book_name]
  @book_url_raw = "https://www.googleapis.com/books/v1/volumes?q=title:#{params[:book_name]}"
  @book_url = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{params[:book_name]}")
  @book_volumes = @book_url["totalItems"].to_i
  if @book_volumes > 0
    @book_image = @book_url["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @book_description = @book_url["items"][0]["volumeInfo"]["description"]
    @book_short_description = @book_url["items"][0]["volumeInfo"]["description"].slice(0, 140) + '...' #maybe link to full description?
    @book_title = @book_url["items"][0]["volumeInfo"]["title"]
    @author = @book_url["items"][0]["volumeInfo"]["authors"][0]
    @google_link = @book_url["items"][0]["selfLink"]
    @buy = @book_url["items"][0]["saleInfo"]["buyLink"]
    @book_price = @book_url["items"][0]["saleInfo"]["listPrice"]["amount"]
    erb :book
  else
    puts"redirect to another page"
    binding.irb
    erb :nobook
  end

end

get '/login/form' do
  erb :login_form
end

post '/login/attempt' do
  session[:identity] = params['username']
  where_user_came_from = session[:previous_url] || '/'
  redirect to where_user_came_from
end

get '/logout' do
  session.delete(:identity)
  erb "<div class='alert alert-message'>Logged out</div>"
end

get '/secure/place' do
  erb :secure_place
end
