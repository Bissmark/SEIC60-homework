# Subway lines and stations (hashes in hash)
$subway_lines = {
"N" => {
    :stations => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
},
"L" => {
    :stations => ["8th", "6th", "Union Square", "3rd", "1st"]
},
"6" => {
    :stations => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
}

#Method for showing the user's trip
def trip_planner (start_line, start_station, end_line, end_station)

    #Getting the index of the starting and ending stations
    start_index = $subway_lines[start_line][:stations].index(start_station)
    end_index = $subway_lines[end_line][:stations].index(end_station)

    #Empty arrays to store the stations passed trip
    trip = []
    trip_1 = []
    trip_2 = []

    #To find the index number of Union Square on the start and end lines
    start_union_square = $subway_lines[start_line][:stations].index("Union Square")
    end_union_square = $subway_lines[end_line][:stations].index("Union Square")

    #Loops to fill the arrays with stations travelled
    $subway_lines[start_line][:stations][start_index + 1..end_index].each do |n|
        trip << n
    end

    $subway_lines[start_line][:stations][start_index + 1..start_union_square].each do |n|
        trip_1 << n
    end

    #Filling the empty array if Union Square is before the end station
    if end_union_square < end_index
        $subway_lines[end_line][:stations][end_union_square + 1..end_index].each do |n|
        trip_2 << n
        end
    end 

    #If Union Square on the end line is after the end stop, reverse the end line array before filling the empty array
    if end_union_square > end_index
        $subway_lines[end_line][:stations].reverse!
        end_union_square = $subway_lines[end_line][:stations].index("Union Square")
        end_index = $subway_lines[end_line][:stations].index(end_station)
        $subway_lines[end_line][:stations][end_union_square + 1..end_index].each do |n|
        trip_2 << n
        end
    end 

    #If the user chooses Union Square for starting or ending station
    if start_station == "Union Square" && end_union_square < end_index
        start_line = end_line
        start_index = $subway_lines[start_line][:stations].index(start_station)
        end_index = $subway_lines[end_line][:stations].index(end_station)
        trip = $subway_lines[start_line][:stations][start_index + 1..end_index]

    elsif start_station == "Union Square" && end_union_square > end_index
        start_line = end_line
        $subway_lines[start_line][:stations].reverse!
        start_index = $subway_lines[start_line][:stations].index(start_station)
        end_index = $subway_lines[end_line][:stations].index(end_station)
        trip = $subway_lines[start_line][:stations][start_index + 1..end_index]
    end
    
    if end_station == "Union Square" && start_union_square < start_index
        end_line = start_line
        start_index = $subway_lines[start_line][:stations].index(start_station)
        end_index = $subway_lines[end_line][:stations].index(end_station)
        trip = $subway_lines[start_line][:stations][start_index + 1..end_index]

    elsif end_station == "Union Square" && start_union_square > start_index
        end_line = start_line
        $subway_lines[start_line][:stations].reverse!
        start_index = $subway_lines[start_line][:stations].index(start_station)
        end_index = $subway_lines[end_line][:stations].index(end_station)
        trip = $subway_lines[start_line][:stations][start_index + 1..end_index]
    end

    if start_station == "Union Square" && end_station == "Union Square"
        puts "If you would like to complete this trip, please change platforms."
    end

    #If user chooses the same line
    if start_line == end_line && start_index < end_index
        puts "You must travel through the following stops on the #{start_line} line: #{trip.join(", ")}."
        puts "You do not need to change lines."
        puts "#{end_index - start_index} stops in total."
    end

    if start_line == end_line && end_index < start_index
        $subway_lines[start_line][:stations].reverse!
        start_index = $subway_lines[start_line][:stations].index(start_station)
        end_index = $subway_lines[end_line][:stations].index(end_station)
        trip = $subway_lines[start_line][:stations][start_index + 1..end_index]
            puts "You must travel through the following stops on the #{start_line} line: #{trip.join(", ")}."
            puts "You do not need to change lines."
            puts "#{end_index - start_index} stops in total."
        end

    #If the user chooses different lines
    if start_index < start_union_square && start_line != end_line
        puts "You must travel through the following stops on the #{start_line} line: #{trip_1.join(", ")}."
        puts "Change at Union Square."
        puts "Your journey continues on the #{end_line} line through the following stops: #{trip_2.join(", ")}."
        puts "#{trip_1.length + trip_2.length} stops in total."
    end

    if start_index > start_union_square && start_line != end_line
        trip_1 = "Union Square"
            puts "You must travel through the following stops on the #{start_line} line: #{trip_1}."
            puts "Change at Union Square."
            puts "Your journey continues on the #{end_line} line through the following stops: #{trip_2.join(", ")}."
            puts "#{trip_2.length + 1} stops in total."
    end
end

trip_planner "6", "33rd", "N", "Union Square"

