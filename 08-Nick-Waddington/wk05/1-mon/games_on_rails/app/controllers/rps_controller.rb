class RpsController < ApplicationController

    def guess
    end

    def answer
        comp_choice = ['rock', 'paper', 'scissors'].sample

        if params[:guess] == comp_choice
            @result = "draw"
        elsif params[:guess] == 'rock' && comp_choice == 'paper'
            @result = "Computer wins"
        elsif params[:guess] == 'paper' && comp_choice == 'scissors'
            @result = "Computer wins"
        elsif params[:guess] == 'scissors' && comp_choice == 'rock'
            @result = "Computer wins"
        else
            @result = "Player wins"
        end
    end

end
