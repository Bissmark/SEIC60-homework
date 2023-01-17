class FutureController < ApplicationController
    def answer
        @question = params[:query]
        @result = magicball
        render :future
    end
end

def magicball
    possible_answers = 
    ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.",
    "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.",
    "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.",
    "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.",
    "My sources say no.", "Outlook not so good.", "Very doubtful."
        ] # Thanks Nicole :)
    answer = possible_answers[rand possible_answers.size]
    a = answer
    @line1 = a[0...9]
    @line2 = a[9...18]
    @line3 = a[18...27]
    # Some kid made an 8ball image generator http://www.redkid.net/generator/8ball/
    # http://www.redkid.net/generator/8ball/newsign.php?line1=Supports&line2=9+&line3=lines&Shake+Me=Shake+Me
    @result = answer

end 