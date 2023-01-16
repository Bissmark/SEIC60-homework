class GamesController < ApplicationController
    
    def magic8ball
        @title = params[:title]
        @answer = ["It is certain",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."].sample
    end



    def secretnumber
        @guess = params[:guess]
        secret_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sample
        user_guess = params[:guess].to_i
        if user_guess == secret_number
            @answer = "Congratulations! You guessed the right number!"
        elsif user_guess < secret_number
            @answer = "Too low, try again!"
        else
            @answer = "Too high, try again!"
        end
    end
    
    def rockpaperscissors
        @user_choice = params[:user_choice]
        @computer_choice = ["rock", "paper", "scissors"].sample
        if @user_choice == @computer_choice
            @result = "It's a tie!"
        elsif (@user_choice == "rock" && @computer_choice == "scissors") || (@user_choice == "paper" && @computer_choice == "rock") || (@user_choice == "scissors" && @computer_choice == "paper")
            @result = "You win!"
        else
            @result = "You lose!"
        end
    end
end