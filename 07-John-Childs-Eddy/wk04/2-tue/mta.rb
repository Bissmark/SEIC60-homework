# STORE each of the 3 seperate train lines in a hash:
train_lines = {
    "N" => {
        :stops => [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ]
    },
    "L" => {
        :stops => [ "9th", "6th", "Union Square", "3rd", "1st" ]
    },
    "6" => {
        :stops => [ "Grand Central", "33rd", "29th", "22nd", "Union Square", "Astor Place" ]
    }
}

# ASK USER: For the departing stop name and line 
puts "Please enter the name of your departing stop (eg Times Square, 8th, Grand Central)"
departing_stop = gets.chomp
puts "Please enter the name of your departing line (N, L, 6)"
departing_line = gets.chomp

# ASK USER: For the arriving stop name and line 
puts "Please enter the name of your arriving stop (eg Times Square, 8th, Grand Central)"
arriving_stop = gets.chomp
puts "Please enter the name of your arriving line (N, L, 6)"
arriving_line = gets.chomp

# Derive the index of the departing and arriving stops
index_departing = train_lines[departing_line][:stops].index(departing_stop) 
index_arriving = train_lines[departing_line][:stops].index(arriving_stop) 

# Derive the index of the Union Square stop as a special case for each train line
union_square_index_line_n = train_lines["N"][:stops].index("Union Square")
union_square_index_line_l = train_lines["L"][:stops].index("Union Square")
union_square_index_line_6 = train_lines["6"][:stops].index("Union Square")

# Derive the total number of stops by finding the difference in index numbers and using .abs to return a positive integer
total_stops = ( index_departing - index_arriving ).abs
puts "=-"*50
puts "You will travel #{ total_stops } stops"

# Calculate the stop names between departing_stop and arriving_stop for both forward and backwards travel 
journey_stops = train_lines[departing_line][:stops][index_departing..index_arriving]
journey_stops_backwards = train_lines[departing_line][:stops][index_arriving..index_departing]
journey_stops_backwards_reversed = journey_stops_backwards.reverse

# Return the stop names as a string for both forward and backwards travel 
journey_stops_string = journey_stops.join(", ")
journey_stops_backwards_string = journey_stops_backwards_reversed.join(", ")

# FOR SAME LINE: return the name's of each stop depending on the direction of travel
if departing_line == arriving_line && index_departing < index_arriving
    puts "You travel through the following stops: #{ journey_stops_string } "
    puts "=-"*50
elsif departing_line == arriving_line && index_departing > index_arriving
    puts "You travel through the following stops: #{ journey_stops_backwards_string } "
    puts "=-"*50
end

