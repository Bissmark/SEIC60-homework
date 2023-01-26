class GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def new
    @game = Game.new
  end

  def create
    game = Game.create game_params
    redirect_to game
  end
  
  def edit
    @game = Game.find params[:id]
  end

  def update
    game = Game.find params[:id]
    game.update game_params
    redirect_to game
  end

  def show
    @game = Game.find params[:id]
  end

  def destroy_all
    game = Game.find params[:id]
    game.destroy_all
    redirect_to games_path

  private
  def game_params
    params.require(:game).permit(:game, :release_date, :image, :developer_id)
  end
end
