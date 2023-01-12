require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/result' do
    book_request = "https://www.googleapis.com/books/v1/volumes?q=title:#{params[:book_title]}"
    book_info = HTTParty.get book_request
    @book_image = book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    @book_title = book_info["items"][0]["volumeInfo"]["title"]
    book_author = book_info["items"][0]["volumeInfo"]["authors"]
    @book_publish_date = book_info["items"][0]["volumeInfo"]["publishedDate"]

    @book_author = ""
    book_author.each do |author|
        @book_author += "#{author}, "
    end
    @book_author = @book_author[0..-3]

    erb :result
end