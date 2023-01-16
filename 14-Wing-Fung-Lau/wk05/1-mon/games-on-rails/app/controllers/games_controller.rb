class GamesController < ApplicationController
    def magic_8_ball
        render :magic8ball
    end

    def magic_answer

        answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", " Reply hazy, try again.", " Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", " Don't count on it.", " My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
        random_num = rand(20)

        @color = case random_num
        when 0..9
            "green"
        when 10..14
            "yellow"
        when 15..19
            "red"
        end

        @answer = answers[random_num]

        render :magic_answer
    end

    def secret_number
        @random_num = rand(9) + 1
        render :secretnumber
    end

    def rock_paper_scissor
        shapes = ['Rock', 'Paper', 'Scissor']
        @random_shape = shapes.sample
        render :rockpaperscissor    
    end
end

