# Trip Calculator
# Calculate a trip time and cost given inputs for

# distance
# miles per gallon
# price per gallon
# speed in miles per hour

def trip_cal
    puts "Trip time & cost Calculator".center(30,"-")
    puts "*o*" * 10

    # get variable
    print "distance (mile): "
    distance = gets.to_f

    print "miles per gallon: "
    mile_per_gallon = gets.to_f

    print "price per gallon (AUD): "
    price_per_gallon = gets.to_f

    print "speed in miles per hour: "
    mile_per_hour = gets.to_f
    
    # show results
    puts "For your inputs, time = #{ distance / mile_per_hour } hours and cost = #{ ( distance / mile_per_gallon ) * price_per_gallon } AUD. "
end

trip_cal