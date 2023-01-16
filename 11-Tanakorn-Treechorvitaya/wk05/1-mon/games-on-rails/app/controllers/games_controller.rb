class GamesController < ApplicationController
    def home
    end

    # Magic 8 ball game
    def magic
    end
    def message
        set_of_word = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.",
                        "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.",
                        "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.",
                        "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.",
                        "My sources say no.", "Outlook not so good.", "Very doubtful."
                        ]
        @answer = set_of_word.sample
    end

    # Secret number game
    def guess
    end
    def number
        @answer = ""
        @number = params[:num].to_i
        @secret_number = rand(1..10)
        if @number == @secret_number
            @answer = "correct"
        else
            @answer = "incorrect"
       end
    end

    # Rock paper scissors game
    def choose
    end
    def win
        @answer = ""
        @choice = params[:choice]
        @random_choice = ["rock","paper","scissors"].sample
        if (@choice == "rock" && @random_choice == "scissors") || (@choice == "scissors" && @random_choice == "paper") || (@choice == "paper" && @random_choice == "rock")
            @answer = "You win!" 
        else
            @answer = "You loss!" 
        end
    end
end
  