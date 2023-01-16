class BallController < ApplicationController
  def ask
    question = params[:question]
    answers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes definitely',
      'You may rely on it',
      'As I see it, yes',
      'Most likely',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy, try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful'
    ]
    unless question.nil?
      if question.end_with?('?')
        @answer = answers[rand(0...answers.size)]
      else
        @answer = 'Hmmm...I dont get your question'
      end
    end
    @answer
  end
end
