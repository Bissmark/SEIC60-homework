# # MTA Lab

# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.

# #### Activity
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


# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

SUBWAY = {
'N' => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
'L' => ["8th", "6th", "Union Square", "3rd", "1st"]
'6' => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

INTERSECTION = "Union Square"

start_position = subway_station[start_line].index(starting_station)

end_position = subway_station[end_line].index(end_station)

if start_line == end_line

    num_stops = end_position - start_position

    trip = []

    if num_stops > 0

        trip = subway_station[start_line][start_position + 1 .. end_position]
    
    else
        
        trip = subway_station[start_line][end_position .. start_position - 1].reverse

        num_stops = num_stops * -1 
end
        puts "#{num_stops} stops in total."
        puts "You must travel through the following stops on the #{start_line} line: #{trip.join(', ')}."
else

    sl_interchange_index = subway_station[start_line].index(interchange)
    el_interchange_index = subway_station[end_line].index(interchange)
    
    start_journey =[]

    start_num_stops = sl_interchange_index - start_position
    
    if start_num_stops > 0
  
        start_journey = subway_station[start_line][start_position + 1 .. sl_interchange_index]
    else
        start_journey = subway_station[start_line][sl_interchange_index .. start_position - 1].reverse
    
        start_num_stops = start_num_stops * -1 
    end
        puts "You must travel through the following stops on the #{start_line.upcase} line: #{start_journey.join(', ')}."
        puts "change at #{interchange}"
    
    end_journey = []
    
    end_num_stops = end_position - el_interchange_index
    
    if end_num_stops > 0 
        end_journey = subway_station[end_line][el_interchange_index + 1 .. end_position]
    else 
        end_journey = subway_station[end_line][end_position .. el_interchange_index - 1].reverse
    
        end_num_stops = end_num_stops * -1
    end
        puts "Your journey continues on the #{end_line} Line and through the following stops: #{end_journey.join(', ')}."
    
        total_stops = start_num_stops + end_num_stops
        
        puts "#{total_stops} stops in total."
end

