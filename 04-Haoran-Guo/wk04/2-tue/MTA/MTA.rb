def single_line(start_index, dest_index, subway_arr)
  if start_index > dest_index
    return subway_arr.reverse
  else
    return subway_arr
  end
end

def multiple_lines(platform_index, intersect_index, subway_arr)
  if platform_index < intersect_index
    return subway_arr[platform_index..intersect_index]
  else
    return subway_arr[intersect_index..platform_index]
  end
end

def plan_trip(line1, start, line2, dest)
  subways = {
    :N => "Times Square,34th,28th,23rd,Union Square,8th".split(","),
    :L => "8th,6th,Union Square,3rd,1st".split(","),
    :"6" => "Grand Central,33rd,28th,23rd,Union Square,Astor Place".split(',')
  }
  # take one line
  if line1 == line2
    # the subway taken
    subway = subways[line1.to_sym]
    start_index = subway.index(start)
    dest_index = subway.index(dest)
    journey = single_line(start_index, dest_index, subway)
    # print the results
    puts "You must travel trough the following stops on the #{line1} line: #{journey.join(", ")}."
    puts "#{journey.size} in total."
  end
  # take multiple lines
  subway_start = subways[line1.to_sym]
  subway_dest = subways[line2.to_sym]
  start_index = subway_start.index(start)
  dest_index = subway_dest.index(dest)

  # Union Square and its index in both lines
  intersect = "Union Square"
  subway_start_intersect_index = subway_start.index(intersect)
  subway_dest_intersect_index = subway_dest.index(intersect)

  journey_start = multiple_lines(start_index, subway_start_intersect_index, subway_start)
  journey_dest = multiple_lines(dest_index, subway_dest_intersect_index, subway_dest)

  # print the result
  puts "You must travel trough the following stops on the #{line1} line: #{journey_start[1..-1].join(", ")}."
  puts "Change at #{ intersect }."
  if journey_dest[0] == intersect
    puts "Your journey continues through the following stops on the #{line2} line: #{ journey_dest[1..-1].join(", ")}."
  else
    puts "Your journey continues through the following stops on the #{line2} line: #{ journey_dest.reverse[1..-1].join(", ")}."
  end
  puts "#{ journey_start.size + journey_dest.size - 2} stops in total."

end

# plan_trip('N', 'Times Square', 'N', '8th')
plan_trip 'N', 'Times Square', '6', '33rd'