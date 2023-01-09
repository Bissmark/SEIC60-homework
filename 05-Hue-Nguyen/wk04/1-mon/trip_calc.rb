# mpg: miles per gallon
# ppg: price per gallon
# mph: speed in miles per hour

def trip_calculator(distance, mpg, ppg, mph)
    time = distance / mph
    cost = (distance / mpg) * ppg
    return cost, time
end

puts trip_calculator(1000, 10, 3, 4)