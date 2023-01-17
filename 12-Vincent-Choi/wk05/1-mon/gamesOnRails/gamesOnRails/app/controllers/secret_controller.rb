class SecretController < ApplicationController
    def guess
    end

    def answer
        secret_number = 1 + rand(10)
        answer = params[:secret].to_i
        
        if answer == secret_number
            render :correct
        else
            render :incorrect
        end
    end
end