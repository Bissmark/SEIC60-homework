class SecretController < ApplicationController
    def form
    end

    def answer
        @guess = params[:num].to_i
        @randnum = rand(10)

        if @guess == @randnum
            render :answer
        else
            render :wrong
        end
    end
end