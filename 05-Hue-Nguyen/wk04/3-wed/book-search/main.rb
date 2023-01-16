require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# homepage
get '/' do

  erb :home
end

# GET and show all found results.
get '/info' do
  # get the information
  url = "https://www.googleapis.com/books/v1/volumes?q=#{params[:title]}"
  info = HTTParty.get(url).parsed_response

  @books = info["items"]
  @num_results = info["items"].size

  # p @num_results
  # @thumbnail = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  # p @thumbnail
  # @title = info["items"][0]["volumeInfo"]["title"]
  # p @title
  # @author = info["items"][0]["volumeInfo"]["authors"].join(', ')
  # p @author
  # @publishedYear = info["items"][0]["volumeInfo"]["publishedDate"].slice(0..3)
  # p @publishedYear
  # @description = info["items"][0]["volumeInfo"]["description"]
  # p @description

  erb :info
end

