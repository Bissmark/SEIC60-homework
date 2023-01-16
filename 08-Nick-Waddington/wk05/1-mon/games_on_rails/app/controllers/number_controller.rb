class NumberController < ApplicationController

    def guess
    end

    def answer
        random_number = rand(10)
        guess = params[:guess].to_i

        if guess == random_number
            @answer = "yay"
        elsif guess != random_number
            @answer = "try again"
       end
    end
end

