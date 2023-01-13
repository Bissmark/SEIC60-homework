# Books I
# Specification

# Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.


require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
    erb :home
end

###############################
get '/info' do
    # get the book
    code = params[:code]
    url = "#{ params[:code] }&size=220x220&margin=0"
    @response = HTTParty.get(url).parsed_response
    # render the result
    erb :info
end

###############################