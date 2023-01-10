# MTA Lab

## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.

#### Activity
# * Create a program that models a simple subway system.

# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console: 


# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```

# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


#### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

###################################
# first attempt - yikes#
###################################
# destination = Union Square

# def show_menu
#     puts "Trip Planner"
#     puts "=" * 40
#     puts "[n] - nLine"
#     puts "[q] - Quit"
# end

# print "Which station are you currently at?:  "
# station = gets.chomp

# n = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]

# print "Which station are you currently at?:  "
# station = gets.chomp

#     if  station == 'Times Square' 
#         puts "Stay on this train line."
#     elsif station == '34th' 
#         puts "Stay on this train line."
#     elsif station == '28th' 
#         puts "Stay on this train line."
#     elsif station == '23rd' 
#         puts "Stay on this train line."
#     elsif station == '8th'
#         puts "Stay on this train line."
#     else 
#         puts "You've arrived at your destination!"
#     end 

# def show_menu
#     puts "Trip Planner"
#     puts "=" * 40
#     puts "[n] - nLine"
#     puts "[q] - Quit"
# end


##################################
# second attempt - ya#
##################################
# def start_line
# end
# def start_station
# end
# def end_line
# end 
# def end_station

subway = {
    'N' => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    'L' => ["8th", "6th", "Union Square", "3rd", "1st"]
}

def trip (start_line, start_station, end_line, end_station)
    start_index = subway[start_line].index(start_station)
    end_index = subway[end_line].index(end_station)
    num_stops = (start_index - end_index).abs
    trip = []
    if start_line == end_line
        if start_index < end_index 
            (start_index..end_index).each do |i|
                    trip.push(subway[start_line][i])
            end  
        else 
            (start_index).downto(end_index) do |i|
                    trip.push(subway[start_line][i])
            end
        end
    else
        start_index = subway[start_line].index("Union Square")
        end_index = subway[end_line].index("Union Square")
    end
    puts "Travel through the following stops on #{ start_line } line: #{ trip.join(', ')}"
    puts "#{ num_stops } stops in total."
end

trip('N', "Times Square", 'L', "Union Square")

binding.irb
# NOTES: 
# .index(element) instead of .indexOf(element)
# .downto for descending loop 
# .times for ascending loop
# use .abs to get absolute value. e.g. num_stops = (start_index - end_index).abs