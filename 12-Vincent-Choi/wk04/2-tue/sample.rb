puts "What is your end station"
    end_station = gets.chomp.downcase

# Create subway station lines with arrays
subway_station = {
    'n' => ['times square', '34th', '28th', '23rd', 'union square', '8th'],
    'l' => ['8th', '6th', 'union square', '3rd', '1st'],
    '6' => ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place']
}
# create interchange stop in a variable. 
interchange = 'union square'

# store selected start position in a new variable
start_position = subway_station[start_line].index(starting_station)

# store selected end position in a new variable
end_position = subway_station[end_line].index(end_station)

# create outcome for when startline and endline chosen are the same
if start_line == end_line
    # define the number of stops
    num_stops = end_position - start_position

    # create empty array to put stops into so original array is untouched
    journey_detail = []

    if num_stops > 0
        # if no. of stops is a positive number count up from index of start station to end station. store this in a variable but exclude the start station
        journey_detail = subway_station[start_line][start_position + 1 .. end_position]
    else
        # if no. of stops in less than 0, count in reverse from end station index to start station index. store in journey array instead and still exclude start station
        journey_detail = subway_station[start_line][end_position .. start_position - 1].reverse

        num_stops = num_stops * -1 
end
        puts "#{num_stops} stops in total."
        puts "You must travel through the following stops on the #{start_line} line: #{journey_detail.join(', ')}."
else
    # first find the index of the interchange "Union Square" in the start line and end line
    sl_interchange_index = subway_station[start_line].index(interchange)
    el_interchange_index = subway_station[end_line].index(interchange)

    # need to split the journey in two. get from start line to interchange first
    # create empty array for start journey
    start_journey =[]

    # define number of stops between starting position and union square and put into new array
    start_num_stops = sl_interchange_index - start_position

    if start_num_stops > 0
        # if no. of stops is more than 0, count the stations until the interchange.
        start_journey = subway_station[start_line][start_position + 1 .. sl_interchange_index]
    else
        # if no. of stops in less than 0, count in reverse from interchange to start station index.
        start_journey = subway_station[start_line][sl_interchange_index .. start_position - 1].reverse

        # calculate number of stops in the first line of travel
        start_num_stops = start_num_stops * -1 
    end
        puts "You must travel through the following stops on the #{start_line.upcase} line: #{start_journey.join(', ')}."
        puts "change at #{interchange}"

    end_journey = []

    # define the number of stops between end position and interchange station
    end_num_stops = end_position - el_interchange_index

    if end_num_stops > 0 
        # if num stops is more than 0, count from interchange to end position and add stations to new array excluding interchange
        end_journey = subway_station[end_line][el_interchange_index + 1 .. end_position]
    else 
        # if num stops is less than 0, count back from end position to interchange adding stations to end journey array except interchange
        end_journey = subway_station[end_line][end_position .. el_interchange_index - 1].reverse

        # calculate the number of stops in the end line of travel
        end_num_stops = end_num_stops * -1
    end
        puts "Your journey continues on the #{end_line} Line and through the following stops: #{end_journey.join(', ')}."

        # calculate total number of stops
        total_stops = start_num_stops + end_num_stops
        # Output the total number of stops
        puts "#{total_stops} stops in total."
end