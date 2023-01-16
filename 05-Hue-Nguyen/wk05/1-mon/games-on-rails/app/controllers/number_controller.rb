class NumberController < ApplicationController

  def guess
    unless params[:number].nil?
      rand_num = rand(10)
      user_num = params[:number].to_i
      p user_num
      p rand_num
      @message = case user_num == rand_num
        when true then 'Yay, you rock it'
        when false then "Nah. Nice try! The secret number is #{ rand_num }."
      end
    end
    @message
  end

end
