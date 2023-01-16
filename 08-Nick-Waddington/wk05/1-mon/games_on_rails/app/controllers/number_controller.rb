class NumberController < ApplicationController

    def guess
    end

    def answer
        @random_number = rand(10)
        guess = params[:guess].to_i

        if guess == @random_number
            @answer = "Your guess pleases the spirits."
        elsif guess != @random_number
            @answer = "The spirits say the correct number is #{ @random_number }. You lose."
       end

        if guess == 1 || guess == 6
            @mask = "/assets/mask1.jpg"
        elsif guess == 2 || guess == 7
            @mask = "/assets/mask2.jpg"
        elsif guess == 0 || guess == 3 || guess == 8
            @mask = "/assets/mask3.jpg"
        elsif guess == 4 || guess == 9
            @mask = "/assets/mask4.png"
        elsif guess == 5 || guess == 10
            @mask = "/assets/mask5.jpg"
        end
    end
end

