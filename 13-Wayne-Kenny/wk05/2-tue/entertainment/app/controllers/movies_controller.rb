class MoviesController < ApplicationController
    def index
        @movies = Movie.all
    end

    def show
        @movie = Movie.find params[:id]
    end

    def new
    end

    def create
        movie = Movie.create :name => params[:name], :poster => params[:poster], :director => params[:director], :year => params[:year], :age_rating => params[:age_rating], :imdb_rating => params[:imdb_rating].to_f
        redirect_to movie_path(movie.id)
    end

    def edit
        @movie = Movie.find params[:id]
    end

    def update
        movie = Movie.find params[:id]
        movie.update :name => params[:name], :poster => params[:poster], :director => params[:director], :year => params[:year], :age_rating => params[:age_rating], :imdb_rating => params[:imdb_rating].to_f
        redirect_to movie_path(movie.id)
    end

    def destroy
        movie = Movie.find params[:id]
        movie.destroy
        redirect_to movies_path
    end
end