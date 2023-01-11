require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/result' do

    title = params[:books]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
    result = HTTParty.get book_url


    @info = result["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

    erb :result
end