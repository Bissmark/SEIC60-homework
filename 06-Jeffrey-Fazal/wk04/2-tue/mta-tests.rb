# N_LINE = ["Times Square", "34th", "28th on N", "23rd on N", "Union Square","8th on N"]
L_LINE = ["8th on L", "6th", "Union Square", "3rd", "1st"]
# SIX_LINE = ["Grand Central", "33rd", "28th on 6", "23rd on 6", "Union Square",  "Astor Place"]

def single_trip()
    puts "These are the stops you can choose from: #{L_LINE}"
    print "What is your starting station? " 
    stop_one = gets.chomp #TODO: if not in aray prompt again
    p  "You have chosen to start at (stop_one): #{stop_one}"
    stop_one_index = L_LINE.index "#{stop_one}"
    p "This is the (stop_one_index) #{stop_one_index} station"
    print "What is your final destination? " 
    stop_two = gets.chomp
    p "You have chosen to end at (stop_two:) #{stop_two}"
    stop_two_index = L_LINE.index "#{stop_two}"
    p "Which is the (stop_two_index) #{stop_two_index} station"
    l_reversed = L_LINE.reverse
    if stop_two_index > stop_one_index # Train goes forward
        p 'Train goes forwards'
        puts "You must travel through the following stops: #{L_LINE[stop_one_index .. stop_two_index]}"
        puts "#{stop_two_index - stop_one_index} stops in total."
        
    else # Train goes backwards
        p 'Train goes backwards'
        puts "You must travel through the following stops: #{l_reversed[stop_two_index .. stop_one_index]}"
        puts "#{stop_two_index unless stop_one_index == 0} stops in total" # Figure out edge case i.e starts at 0
        
    end 
end 

single_trip()



# def plan_trip(line_one,stop_one,line_two,stop_two)
#     puts "What line are you traveling on?" # line_one = gets.chomp
#     puts "What is your starting station?" # stop_one = gets.chomp
#     puts "What is your final destination?" # stop_two = gets.chomp
#     puts "What line is the final station on?" # line_two = gets.chomp
# end 

# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
# prints the journey and the total number of stops for the trip in the console:
# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.