# Trip Calculator
# Calculate a trip time and cost given inputs for

# distance
# miles per gallon
# price per gallon
# speed in miles per hour

def trip_cal
    puts "Calculator".center(30,"-")
    puts "*o*" * 10

    print "distance (mile): "
    distance = gets.to_f

    print "miles per gallon: "
    mile_per_gallon = gets.to_f

    print "price per gallon: "
    price_per_gallon = gets.to_f

    print "speed in miles per hour: "
    mile_per_hour = gets.to_f
    
    puts "For your inputs, time = #{ distance / mile_per_hour } hours and cost = #{ ( distance / mile_per_gallon ) * price_per_gallon } "

end

trip_cal