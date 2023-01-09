# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
def my_puts(str)
    puts str.center(50)
end

my_puts "Mortgage calculator"
puts "Use this calculator to calculate your monthly repayments."
print "Mortgage Amount: "
amount = gets.to_i
print "Mortgage Term (years): "
t = gets.to_i
print "Interest Rate (%): "
r = gets.to_i

n = 12

payment = amount * (r / n) * ((1 + r / n)**n(t)) / (1 + r / n)**n(t) - 1

puts "Your Monthly Payment is: #{payment}"
