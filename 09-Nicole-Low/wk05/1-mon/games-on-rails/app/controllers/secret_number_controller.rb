class SecretNumberController < ApplicationController
    def play
        render :play
    end

    def result
        @secret_number = rand(1..3)
        @result = params[:guess].to_i

        render :result
    end
end