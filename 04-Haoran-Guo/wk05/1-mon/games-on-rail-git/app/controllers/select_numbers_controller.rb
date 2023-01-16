class SelectNumbersController < ApplicationController
    def form 
    end 

    def info
        session[:number] = 10 
        @user_input = params[:number].to_i
        pc_generated_number = rand(11) 
        @result = case 
        when @user_input == pc_generated_number
            "Good Job!"
        when @user_input > pc_generated_number
            "Guess a smaller number!"
        else 
            "Guess a bigger number!"
        end 

    end 
end 