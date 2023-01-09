# Calculate a trip time and cost given inputs for

# distance
# kilometres per litre 
# price per litre
# speed in kilometres per hour

def my_puts(str)
    puts str.center(50)
end



my_puts "Trip Calculator"
puts "Use this calculator to calculate trip time and fuel costs."

print "Distance (km): "
distance = gets.to_f
print "Kilometres per litre: "
kilometres_per_litre = gets.to_f
print "Fuel price per litre (AU$): "
price_per_litre = gets.to_f
print "Speed (km): "
speed = gets.to_f

trip_time = distance / speed
cost = distance / kilometres_per_litre * price_per_litre

puts "Your trip time will be #{trip_time.round(1)} hours and it will cost you $#{cost.round(2)}."