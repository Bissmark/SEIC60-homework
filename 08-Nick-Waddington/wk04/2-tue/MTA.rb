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

def trip_planner (start_line, start_station, end_line, end_station)

    start_index = $subway_lines[start_line][:stations].index(start_station)
    end_index = $subway_lines[end_line][:stations].index(end_station)
    trip = []
    trip_1 = []
    trip_2 = []
    start_union_square = $subway_lines[start_line][:stations].index("Union Square")
    end_union_square = $subway_lines[end_line][:stations].index("Union Square")

    $subway_lines[start_line][:stations][start_index + 1..end_index].each do |n|
        trip << n
    end

    $subway_lines[start_line][:stations][start_index + 1..start_union_square].each do |n|
        trip_1 << n
    end

    $subway_lines[start_line][:stations][end_union_square + 1..end_index].each do |n|
        trip_2 << n
    end

    #same line
        if start_line == end_line && start_index < end_index
            puts "You must travel through the following stops on the #{start_line} line: #{trip.join(", ")}."
            puts "You do not need to change lines"
            puts "#{end_index - start_index} stops in total."
        end

        if start_line == end_line && end_index < start_index
            $subway_lines[start_line][:stations].reverse!
            start_index = $subway_lines[start_line][:stations].index(start_station)
            end_index = $subway_lines[end_line][:stations].index(end_station)
            trip = $subway_lines[start_line][:stations][start_index + 1..end_index]

            puts "You must travel through the following stops on the #{start_line} line: #{trip.join(", ")}."
            puts "You do not need to change lines"
            puts "#{end_index - start_index} stops in total."
        end

    #different lines
        if start_index < start_union_square
            puts "You must travel through the following stops on the #{start_line} line: #{trip_1.join(", ")}."
            puts "Change at Union Square."
            puts "Your journey continues on the #{end_line} line through the following stops: #{trip_2.join(", ")}."
            puts "#{end_index - start_index} stops in total."
        end

        if start_index > start_union_square
            puts "You must travel through the following stops on the #{start_line} line: #{trip_1.join(", ")}."
            puts "Change at Union Square."
            puts "Your journey continues on the #{end_line} line through the following stops: #{trip_2.join(", ")}."
            puts "#{end_index - start_index} stops in total."
        end
end

trip_planner "L", "8th", "N", "8th"


#start line to union square
#end line from union square

