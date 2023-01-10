# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."

$lines = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
def plan_trip (start_line, start_station, end_line, end_station)
    count_stop = 0
    start_index = $lines[start_line].index(start_station)
    end_index = $lines[end_line].index(end_station)
    start_union = $lines[start_line].index("Union Square")
    end_union = $lines[end_line].index("Union Square")
    store_text = ""
    # check and do action
        # same line
        if  start_line == end_line 
            if end_index > start_index 
                store_text = $lines[start_line][start_index..end_index].drop(1).join(", ")
            else 
                store_text = $lines[start_line][end_index..start_index].reverse.drop(1).join(", ")
            end
            # binding.irb
            puts "You must travel through the following stops on the #{start_line} line: #{store_text}."
        # different line
        else
            if start_union > start_index
                store_text = $lines[start_line][start_index..start_union].drop(1).join(", ")
            else 
                store_text = $lines[start_line][start_union..start_index].reverse.drop(1).join(", ")
            end
            puts "You must travel through the following stops on the #{start_line} line: #{store_text}."
            puts "Change at Union Square."
            if end_union > end_index 
                store_text = $lines[end_line][end_index..end_union].reverse.drop(1).join(", ")
            else
                store_text = $lines[end_line][end_union..end_index].drop(1).join(", ")
            end
            # binding.irb
            puts "Your journey continues through the following stops: #{store_text}."
        end
end

plan_trip 'N', 'Times Square', '6', '33rd'
plan_trip 'N', '8th', '6', 'Grand Central'
plan_trip 'N', 'Times Square', 'N', '23rd'