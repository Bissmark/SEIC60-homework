class RockPaperScissorsController < ApplicationController
    def play
        render :play
    end

    def result
        choices = ['Rock', 'Paper', 'Scissors']
        @bot_choice = choices.sample
        @choice = params[:throw].capitalize
        @winner = ""

        if @choice == @bot_choice
            @winner = "draw"
        elsif ((@choice == 'Rock' && @bot_choice == 'Scissors') || (@choice == 'Paper' && @bot_choice == 'Rock') || (@choice == 'Scissors' && @bot_choice == 'Paper'))
            @winner = "player"
        else
            @winner = "bot"
        end

        render :result
    end
end