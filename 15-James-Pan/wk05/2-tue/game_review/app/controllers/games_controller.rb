class GamesController < ApplicationController
    def index
        @games = Game.all
    end

    def show
        @game = Game.find params[:id]
    end

    def new
    end

    def create
        game = Game.create :name => params[:name],
        :image => params[:image],
        :mode => params[:mode],
        :developer => params[:developer],
        :release_date => params[:release_date],
        :platform => params[:platform]
        redirect_to game_path(game.id)
    end

    def edit
        @game = Game.find params[:id]
    end

    def update
        game = Game.find params[:id]
        game.upfate :name => params[:name],
        :image => params[:image],
        :mode => params[:mode],
        :developer => params[:developer],
        :release_date => params[:release_date],
        :platform => params[:platform]
        redirect_to game_path(game.id)
    end

    def destroy
        game = Game.find params[:id]
        game.destroy
        redirect_to games_path
    end



end