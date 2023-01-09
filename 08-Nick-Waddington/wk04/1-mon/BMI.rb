# Calculate the body mass index (BMI) for an individual, given their height and weight

def my_puts(str)
    puts str.center(50)
end

my_puts "BMI Calculator"
puts "Use this calculator to calculate your BMI."
print "Height (cm): "
height = gets.to_f
print "Weight (kg): "
weight = gets.to_f

puts "Your BMI is #{ weight / (height/100) ** 2}."