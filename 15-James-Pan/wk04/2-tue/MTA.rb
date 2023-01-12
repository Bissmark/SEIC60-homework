# starting_line = ""
# starting_station = ""
# ending_line = ""
# ending_station = ""
railway = {
    "N" => {:station => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]},
    "L" => {:station => ["8th", "6th", "Union Square", "3rd", "1st"]},
    "6" => {:station => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]},
}

def mta
    puts "=-" * 40
    puts "MTA Ticket Machine".center(80)
    puts "=-" * 40
    puts "[s] - Start"
    puts "[q] - Quit"
    puts "--" * 40
    puts "Enter your choice: "
end

mta
menu_choice = gets.chomp.downcase

until menu_choice == "q"
    case menu_choice
    when "s"
        puts "🐰😎Welcome to the station!🤣🐶"
        print "Please enter the starting line. N Line ➡️  enter N, L Line ➡️  enter L, 6 Line ➡️  enter 6: "
        starting_line = gets.upcase.chomp[0]
        if railway.key?(starting_line)
            print "Please enter the starting station: "
            starting_station = gets.chomp
            if starting_station == "Union Square"
                print "Please enter the ending station: "
                ending_station = gets.chomp
                if ending_station != "Union Square"
                    if railway[starting_line][:station].index(starting_station) > railway[starting_line][:station].index(ending_station)
                        stops_on_line = railway[starting_line][:station][railway[starting_line][:station].index(ending_station)..railway[starting_line][:station].index(starting_station)-1].reverse
                            puts "Your journey continues through the following stops: #{stops_on_line.join(", ")}."
                            puts "Total #{stops_on_line.length} stops in total."
                    else
                        stops_on_line = railway[starting_line][:station][railway[starting_line][:station].index(starting_station)+1..railway[starting_line][:station].index(ending_station)]
                            puts "Your journey continues through the following stops: #{stops_on_line.join(", ")}."
                            puts "Total #{stops_on_line.length} stops in total."
                    mta 
                    menu_choice = gets.chomp
                    end
                mta 
                menu_choice = gets.chomp
                end
            mta 
            menu_choice = gets.chomp
            end
            
                if railway[starting_line][:station].include?(starting_station)
                    print "Please enter the ending line. N Line ➡️  enter N, L Line ➡️  enter L, 6 Line ➡️  enter 6: "
                    ending_line = gets.upcase.chomp[0]
                if railway.key?(ending_line)
                    print "Please enter the ending station: "
                    ending_station = gets.chomp
                    if railway[ending_line][:station].include?(ending_station)
                        if starting_line == ending_line 
                            if railway[starting_line][:station].index(starting_station) > railway[ending_line][:station].index(ending_station)
                                stops_on_line = railway[starting_line][:station][railway[starting_line][:station].index(ending_station)..railway[starting_line][:station].index(starting_station)-1].reverse
                                puts "You must travel through the following stops on the #{starting_line} Line: #{stops_on_line.join(", ")}."
                                puts "Total #{stops_on_line.length} stops in total."
                            else 
                            stops_on_line = railway[starting_line][:station][railway[starting_line][:station].index(starting_station)+1..railway[ending_line][:station].index(ending_station)]
                                puts "You must travel through the following stops on the #{starting_line} Line: #{stops_on_line.join(", ")}."
                                puts "Total #{stops_on_line.length} stops in total."
                            end
                        elsif starting_line != ending_line
                                starting_index = railway[starting_line][:station].index(starting_station)
                                ending_index = railway[ending_line][:station].index(ending_station)
                                if railway[starting_line][:station].index("Union Square") < starting_index
                                    stops_on_starting_line = railway[starting_line][:station][railway[starting_line][:station].index("Union Square")+1..starting_index].reverse
                                else
                                    stops_on_starting_line = railway[starting_line][:station][starting_index+1..railway[starting_line][:station].index("Union Square")]
                                end
                                if railway[ending_line][:station].index("Union Square") < ending_index
                                    stops_on_ending_line = railway[ending_line][:station][railway[ending_line][:station].index("Union Square")+1..ending_index]
                                else
                                    stops_on_ending_line = railway[ending_line][:station][ending_index..railway[ending_line][:station].index("Union Square")-1].reverse
                                end
                            total_stops = stops_on_starting_line.length + stops_on_ending_line.length
                            puts "**" * 40
                            puts "❤️❤️❤️  You must travel through the following stops on the #{starting_line} Line: #{stops_on_starting_line.join(", ")}."
                            puts "❤️❤️❤️  Change at Union Square."
                            puts "❤️❤️❤️  Your journey continues through the following stops: #{stops_on_ending_line.join(", ")}."
                            puts "❤️❤️❤️  #{total_stops} stops in total."
                            puts "❤️❤️❤️  Safe travels my friend 😂😎🐰🐶"
                        end
                        
                    else   
                    end
                end
            end
        end
    end
mta
menu_choice = gets.chomp.downcase
end
puts "Thank you for using MTA, safe travels".center(80)