require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do 
    erb :home
end

get '/result' do
    # show the result
    title = params[:title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
    info = HTTParty.get book_url
    @cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

    title = params[:title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
    info = HTTParty.get book_url
    @author = info["items"][0]["volumeInfo"]["authors"][0]
    

    #render an erb file to display the result
    erb :result
    
end

