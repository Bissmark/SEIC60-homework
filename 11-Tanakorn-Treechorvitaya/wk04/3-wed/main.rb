require 'sinatra'
require 'sinatra/reloader'

require 'httparty'

get '/' do
    erb :home
end

get '/info' do
    # get the book info
    title = params[:title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
    info = HTTParty.get book_url
    @result = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    # render the result
    erb :info
end