require 'sinatra'
require 'sinatra/reloader'
require 'httparty' 

# root path/home page
get '/' do 
    erb :home
end

get '/info' do
    # get the book info
    title = params[:title] # IRL: this will come from params 
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }" 
    info = HTTParty.get book_url 
    @result = info[“items”][0][“volumeInfo”][“imageLinks”][“thumbnail”]
    # render the result
    erb :info
end