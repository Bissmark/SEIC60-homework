require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/info' do 
    title = params[:book_title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
    book_info = HTTParty.get book_url
    @book_image = book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    
    erb :info
end
