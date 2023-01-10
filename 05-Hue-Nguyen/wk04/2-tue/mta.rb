def plan_trip(startLi, startSt, endLi, endSt)
    subway = {
        'N' => ["Times Square", "34th", "Line-N 28th", "Line-N 23rd", "Union Square", "Line-N 8th"],
        'L' => ["Line-K 8th", "6th", "Union Square", "3rd", "1st"],
        '6' => ["Grand Central", "33rd", "Line-6 28th", "Line-6 23rd", "Union Square", "Astor Place"]
    }
    
    inter = 'Union Square'

    # index of interesection and start stop in their line.
    inter_i_startLi = subway[startLi].index(inter)
    startSt_i = subway[startLi].index(startSt)

    # index of interesection and end stop in their line.
    inter_i_endLi = subway[endLi].index(inter)
    endSt_i = subway[endLi].index(endSt)

    # stops in the start line that the traveller will go through
    if inter_i_startLi > startSt_i 
        s_stops = subway[startLi][startSt_i+1..inter_i_startLi] # exclude the start stop
    else 
        s_stops = subway[startLi][inter_i_startLi...startSt_i].reverse # exclude the start stop
    end

    p "You must travel through the following stops on the #{startLi} line: #{s_stops.join(', ')}."
    p "Change at #{inter}."

    # stops in the end line that the the traveller will go through till the end stop.
    if inter_i_endLi > endSt_i
        e_stops = subway[endLi][endSt_i...inter_i_endLi].reverse # exclude the intersection
    else
        e_stops = subway[endLi][inter_i_endLi + 1..endSt_i] # exclude the intersection
    end

    p "Your journey continues through the following stops: #{e_stops.join(', ')}."
    p "#{(s_stops + e_stops).length} stops in total."

end

plan_trip "L", "6th", "N", "34th"
plan_trip 'N', 'Times Square', '6', '33rd'
plan_trip 'N', 'Line-N 28th', "6", "Astor Place"