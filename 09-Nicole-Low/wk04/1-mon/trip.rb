def trip(distance, miles, price, speed)
    trip_time = distance / speed
    trip_cost = (distance / miles) * price
    puts "Trip time: #{trip_time} hours"
    puts "Trip cost: $#{trip_cost}"
end

trip(250, 5, 2, 50)