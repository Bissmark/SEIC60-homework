class RockpaperscissorController < ApplicationController
    def form
    end

    def answer
        guess =['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
        @throw = params[:throw]
        @computer_guess = guess[rand(5)]
        @win_conditions = {
            'Rock' => 'Scissors',
            'Scissors' => 'Paper',
            'Paper' => 'Rock',
            'Rock' => 'Lizard',
            'Lizard' => 'Spock',
            'Spock' => 'Scissors',
            'Scissors' => 'Lizard',
            'Lizard' => 'Paper',
            'Paper' => 'Spock',
            'Spock' => 'Rock',
    }

        if @win_conditions[@throw] == @computer_guess
            @result = "#{@throw} beats #{@computer_guess} so you win"
        elsif @throw == @computer_guess
            @result = "The computer also chose #{@computer_guess} so you draw"
        else
            @result = "#{@computer_guess} beats #{@throw} so you lose"
        end
    end
end

#         if @throw = 'Rock' && @computer_guess = 'Scissors'
#             @result = "#{@throw} smashes #{@computer_guess}. YOU WIN!"
#         elsif @throw = 'Scissors' && @computer_guess = 'Paper'
#             @result = "#{@throw} cuts #{@computer_guess}. YOU WIN!"
#         elsif @throw = 'Paper' && @computer_guess = 'Rock'
#             @result = "#{@throw} wraps #{@computer_guess}. YOU WIN!"
#         elsif @throw = 'Rock' && @computer_guess = 'Lizard'
#             @result = "#{@throw} smashes #{@computer_guess}. YOU WIN!"
#         elsif @throw = 'Lizard' && @computer_guess = 'Spock'
#             @result = "#{@throw} poisons #{@computer_guess}. YOU WIN!"
#         elsif @throw = 'Spock' && @computer_guess = 'Scissors'
#             @result = "#{@throw} smashes #{@computer_guess}. YOU WIN!"
#         elsif @throw = 'Scissors' && @computer_guess = 'Lizard'
#             @result = "#{@throw} cuts #{@computer_guess} in half. YOU WIN!"
#         elsif @throw = 'Lizard' && @computer_guess = 'Paper'
#             @result = "#{@throw} eats #{@computer_guess}. YOU WIN!"
#         elsif @throw = 'Paper' && @computer_guess = 'Spock'
#             @result = "#{@throw} disproves #{@computer_guess}. YOU WIN!"
#         elsif @throw = 'Spock' && @computer_guess = 'Rock'
#             @result = "#{@throw} smashes #{@computer_guess}. YOU WIN!"
#         elsif @throw == @computer_guess
#             @result = "The computer also chose #{@computer_guess} so you draw"
#         else
#             @result = "#{@computer_guess} beats #{@throw} so you lose"
#         end
#     end
# end