class GamesController < ApplicationController
    def rock_paper_scissors_play
        games = ["rock","paper","scissors"]
        @user_input = params[:throw].downcase 
        pc_guess = games[rand(3)]
        @result = case 
        when @user_input == pc_guess
            "Congrats, it's a correct guess!"
        else 
            "Wrong Guess :("
        end 
    end 
end 
