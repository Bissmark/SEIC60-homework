class PlayersController < ApplicationController 
    def index
        @players = Player.all
    end 

    def show 
        @player = Player.find(params[:id])
    end 

    def new 

    end 

    def create 
        player = Player.create :name => params[:name], :birth_country => params[:birth_country], :height => params[:height], :weight => params[:weight], :image => params[:image]

        redirect_to player_path(player.id)
    end 
    def edit
        @player = Player.find(params[:id])
    end 
    def update
        player = Player.find params[:id]
        player.update :name => params[:name], :birth_country => params[:birth_country], :height => params[:height], :weight => params[:weight], :image => params[:image]

        redirect_to player_path(player.id)
    end 

    def destroy
     player = Player.find params[:id]
     player.destroy

     redirect_to players_path       
    end 

end 