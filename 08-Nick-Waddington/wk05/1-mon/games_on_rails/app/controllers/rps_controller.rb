class RpsController < ApplicationController

    def guess
    end

    def answer
        comp_choice = ['rock', 'paper', 'scissors'].sample

        if params[:guess] == comp_choice
            @result = "Draw"
            @yoshi = "/assets/big_yoshi1.jpg"
        elsif params[:guess] == 'rock' && comp_choice == 'paper'
            @result = "Big Yoshi wins"
            @yoshi = "/assets/big_yoshi2.jpg"
        elsif params[:guess] == 'paper' && comp_choice == 'scissors'
            @result = "Big Yoshi wins"
            @yoshi = "/assets/big_yoshi2.jpg"
        elsif params[:guess] == 'scissors' && comp_choice == 'rock'
            @result = "Big Yoshi wins"
            @yoshi = "/assets/big_yoshi2.jpg"
        else
            @result = "You win"
            @yoshi = "/assets/big_yoshi3.png"
        end
    end

end
