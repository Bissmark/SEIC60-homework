class NumberController < ApplicationController
    def welcome
    end

    def game
        ai = Random.rand 1..10

        if number == ai 
            puts "Correct!"
        elsif number < ai 
            puts "Lower."
        else 
            puts "Higher."

        until number == ai 
            if number < ai
                print "Wrong, guess higher"
            else 
                print "Wrong, guess lower"
                number = gets.to_i
        end

        puts "Congratulations"
    end
end