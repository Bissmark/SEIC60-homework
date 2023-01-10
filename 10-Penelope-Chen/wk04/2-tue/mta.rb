# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= MTA but in Ruby =-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=

# --> Brief
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."

# --> Start here =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

# (I guess I'm hard coding this 1st)
# Trying out 3 different ways actually 

# Ruby arrays for each train line (syntax is off tho)

# n_line = %w( TimesSquare 34th 28thN 23rdN UnionSquare 8thN )
# l_line = %w( 8thL 6th UnionSquare 3rd 1st )
# six_line = %w( GrandCentral 33rd 28th6 23rd6 UnionSquare AstorPlace)

# Ruby function for arrays
# def plan_trip 
    # puts "You must travel through the following stops on the #{}: #{lines["N Line"][1]}, 28thN, 23rdN, Union Square."
    # puts "Change at #{lines["N Line"].last}."
    # puts "Your journey continues through the following stops: 23rd6, 28th6, 33rd."
    # puts "7 stops in total."
# end

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

# Ruby hash (best approach imo)
# lines = {
#   "N Line" => {
#     0 => "Times Square",
#     1 => "34th",
#     2 => "28thN",
#     3 => "23rdN",
#     4 => "Union Square",
#     5 => "8thN"
#   },
#   "L Line" => {
#     0 => "8thL",
#     1 => "6th",
#     2 => "Union Square",
#     3 => "3rd",
#     4 => "1st",
#   },
#   "6 Line" => {
#     0 => "Grand Central",
#     1 => "33rd",
#     2 => "28th6",
#     3 => "23rd6",
#     4 => "Union Square",
#     5 => "Astor Place"
#   },
# }

# Ruby function for hash
# def plan_trip 'N', 'Times Square', '6', '33rd'
    # puts "You must travel through the following stops on the #{lines}: #{lines["N Line"][1]}, 28thN, 23rdN, Union Square."
    # puts "Change at #{lines["N Line"].last}."
    # puts "Your journey continues through the following stops: 23rd6, 28th6, 33rd."
    # puts "7 stops in total."
# end

# Ruby loop?

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

# Ruby array of array (funny syntax again)

# lines = [
#     %w ( TimesSquare 34th 28thN 23rdN UnionSquare 8thN),
#     %w ( 8thL 6th Union Square 3rd 1st ),
#     %w ( Grand Central 33rd 28th6 23rd6 Union Square AstorPlace),
# ]

# puts "You must travel through the following stops on the #{lines[0]}: #{lines[0][1]}, #{lines[0][2]}, #{lines[0][3]}, #{lines[0][4]}."
# puts "Change at #{lines[0][4]}."
# puts "Your journey continues through the following stops: #{lines[2][3]}, #{lines[2][2]}, #{lines[2][1]}."
# puts "#{} stops in total."