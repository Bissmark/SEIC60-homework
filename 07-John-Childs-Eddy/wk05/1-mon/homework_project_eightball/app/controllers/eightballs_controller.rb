class EightballsController < ApplicationController
    def input
        end

    def answer
        @answer = ["It is certain.", "As I see it, yes.", "Reply hazy, try again.", "Don't count on it."].sample
    end
end