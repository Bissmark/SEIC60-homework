class AnswersController < ApplicationController

	def shake
		a = Answer.all.sample
    	render json: a
	end

    def answers 
        ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
    end 
    
    def #something
        puts(answers)
    end

    def info
        @answers = Answer.all
    end
end 

#   def start_x
#     puts(words)
#   end

# end 

    # question = params[:question]
    # Question.create(text: question)
    # a = Answer.all.sample
    # render :json a
