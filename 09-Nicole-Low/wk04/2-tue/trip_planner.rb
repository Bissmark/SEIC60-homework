#-------------------------------------------
# GLOBAL VARIABLES 

$LINE_N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
$LINE_L = ["8th", "6th", "Union Square", "3rd", "1st"]
$LINE_6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
$INTERSECTION = "Union Square"


def plan_trip(line_on, stop_on, line_off, stop_off)
    start_line = ""
    end_line = ""
    result_on = []
    result_off = []

    # check to see which line the traveller is on
    if line_on == "N"
        start_line = $LINE_N
    elsif line_on == "L"
        start_line = $LINE_L
    elsif line_on == "6"
        start_line = $LINE_6
    end

    # check to see which line the traveller wants to get off at
    if line_off == "N"
        end_line = $LINE_N
    elsif line_off == "L"
        end_line = $LINE_L
    elsif line_off == "6"
        end_line = $LINE_6
    end

    #-------------------------------------------
    # IF THE LINE_ON IS THE SAME AS THE LINE_OFF
    if line_on == line_off
        # find the index of the stop_on
        stop_on_index = start_line.index(stop_on)

        # find the index of the stop_off
        stop_off_index = end_line.index(stop_off)

        # to find if we should count towards the end or start of the array to find the intersection
        if stop_off_index > stop_on_index
            result_on = start_line[stop_on_index + 1..stop_off_index]

        elsif
            # reverse to count from the end to the start of the array
            result_on = start_line[stop_off_index..stop_on_index - 1].reverse
        end

        #-------------------------------------------
        # MESSAGE FORMATTING

        num_stops = result_on.size

        puts "You must travel through the following stops on the #{line_on} line: #{result_on.join(", ")}."
        puts "#{num_stops} stops in total."

    #-------------------------------------------
    # IF THE LINE_ON IS DIFFERENT AS THE LINE_OFF
    else
        #-------------------------------------------
        # FIRST LINE

        # find the index that stop_on is at in the line_on
        stop_on_index = start_line.index(stop_on)

        # find the index of the intersection
        intersection_on_index = start_line.index($INTERSECTION)
        
        # to find if we should count towards the end or start of the array to find the intersection
        if intersection_on_index > stop_on_index
            result_on = start_line[stop_on_index + 1..intersection_on_index]

        elsif
            # reverse to count from the end to the start of the array
            result_on = start_line[intersection_on_index..stop_on_index - 1].reverse
        end

        #-------------------------------------------
        # SECOND LINE

        # find the index of the intersection
        intersection_off_index = end_line.index($INTERSECTION)

        # find the index of the stop_off
        stop_off_index = end_line.index(stop_off)

        # to find if we should count towards the end or start of the array to find the end stop
        # reverse to count from the end to the start of the array
        if intersection_off_index > stop_off_index
            result_off = end_line[stop_off_index..intersection_off_index - 1].reverse

        elsif
            result_off = end_line[intersection_on_index..stop_on_index - 1]
        end

        #-------------------------------------------
        # MESSAGE FORMATTING
        num_stops = result_on.size + result_off.size

        puts "You must travel through the following stops on the #{line_on} line: #{result_on.join(", ")}."
        puts "Change at Union Square"
        puts "Your journey continues through the following stops: #{result_off.join(", ")}."
        puts "#{num_stops} stops in total."

    end
end
    


    


#-------------------------------------------
# TESTING

plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."

plan_trip 'N', 'Times Square', 'N', '8th'

plan_trip 'N', '8th', 'N', 'Times Square'
