require "sinatra"
require "sinatra/reloader"
require "httparty"


get "/" do 
    erb :home
end

helpers do
    def book_info
      @info["items"][0]["volumeInfo"]
    end
  end

get "/info" do
    title = params[:title]
    response = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=#{title}")
    @info = JSON.parse(response.body)
    erb :info
  end