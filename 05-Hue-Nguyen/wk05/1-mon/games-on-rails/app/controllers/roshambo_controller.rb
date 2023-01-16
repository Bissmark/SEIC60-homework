class RoshamboController < ApplicationController
  def play
    options = ['paper', 'rock', 'scissors']
    com_choice = rand(3);
    p com_choice
    user_choice = params[:choice].to_i
    p user_choice
    if user_choice + 1 == com_choice || user_choice - 2 == com_choice
      @result = 'You win'
    elsif user_choice == com_choice
      @result = 'Draw'
    else
      @result = 'You lose'
    end
    p @result
    @result
  end
end
