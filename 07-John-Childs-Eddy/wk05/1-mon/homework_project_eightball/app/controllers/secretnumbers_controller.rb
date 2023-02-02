class SecretnumbersController < ApplicationController
    def input
        end

    def secretanswer
        secretguess = gets.to_i
        @secretanswer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sample
    end
end