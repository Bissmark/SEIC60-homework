require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/search' do
    title = params[:btitle]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }" 
    info = HTTParty.get book_url
    @picture = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @book_title = info["items"][0]["volumeInfo"]["title"]
    @author = info["items"][0]["volumeInfo"]["authors"][0]
    @description = info["items"][0]["volumeInfo"]["description"]

    erb :search
end