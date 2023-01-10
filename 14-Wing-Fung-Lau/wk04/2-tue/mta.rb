$subway_system = {"n" => ["times square", "34th", "28th", "23rd", "union square", "8th"], "l" => ["8th", "6th", "union square", "3rd", "1st"], "6" => ["grand central", "33rd", "28th", "23rd", "union square", "astor place"]}






def plan_trip( start_line, start_station, end_line, end_station )

    start_line = start_line.to_s.downcase
    start_station = start_station.downcase
    end_line = end_line.to_s.downcase
    end_station = end_station.downcase



    if !['n', 'l', '6'].include? (start_line)
        puts "Incorrect line input"
        exit
    end

    start_position = $subway_system[start_line].find_index(start_station)
    end_position = $subway_system[end_line].find_index(end_station)

    if start_position == nil || end_position == nil
        puts "Incorrect station input"
        exit
    end

    if start_line == end_line
        number_of_stops = end_position - start_position

        travels = []
        if number_of_stops > 0
            travels = $subway_system[start_line][start_position + 1 .. end_position]
        else
            travels = $subway_system[start_line][end_position .. start_position - 1].reverse
            number_of_stops = number_of_stops * -1 
        end

        
        puts "You must travel through the following stops on the #{end_line} line: #{travels.join(', ')}."
        puts "#{number_of_stops} stops in total."

    else
        start_union_index = $subway_system[start_line].find_index("union square")

        

        start_number_of_stops = start_union_index - start_position

        start_travels  = []
        if start_number_of_stops > 0
            start_travels  = $subway_system[start_line][start_position + 1 .. start_union_index]
        else
            start_travels  = $subway_system[start_line][start_union_index .. start_position - 1].reverse
            start_number_of_stops = start_number_of_stops * -1 
        end

        # p __LINE__, start_travels 

        puts "You must travel through the following stops on the #{start_line.upcase} line: #{start_travels.join(', ')}."

        puts "Change at Union Square."

        end_union_index = $subway_system[end_line].find_index("union square")
        # p __LINE__, end_union_index
        end_number_of_stops = end_position - end_union_index
        # p __LINE__, end_number_of_stops
        end_travels  = []
        if end_number_of_stops > 0
            end_travels  = $subway_system[end_line][end_union_index + 1 .. end_position]
        else
            end_travels  = $subway_system[end_line][end_position .. end_union_index - 1].reverse
            end_number_of_stops = end_number_of_stops * -1 
        end

        # p end_travels 

        puts "Your journey continues through the following stops: #{end_travels.join(', ')}."

        number_of_stops = start_number_of_stops + end_number_of_stops

        puts "#{number_of_stops} stops in total."



    end


end


puts plan_trip 'N', 'Times Square', '6', '33rd'


# binding.irb
