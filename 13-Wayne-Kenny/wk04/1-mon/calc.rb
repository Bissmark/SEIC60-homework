def show_menu
    puts "Calculator".center(115) # TODO: check out .center to make this look nicer
    puts "=-=-" * 30
puts "[a] - Addition"
puts "[d] - Divide"
puts "[e} - Exponent"
puts "[m] - Multiply"
puts "[s] - Subtract"
puts "[sqr] - Square Root"
puts "[BMI] - Body Mass Index"
puts "[Trip] - Trip Calculator"
puts "[q] - Quit"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition"
        puts "choose first number"
        num1 = gets.to_i
        puts "choose second number"
        num2 = gets.to_i
        puts "The answer is #{num1 + num2}"
    when 'm'
        puts "You chose multiplication"
        puts "choose first number"
        num1 = gets.to_i
        puts "choose second number"
        num2 = gets.to_i
        puts "The answer is #{num1 * num2}"
    when 's'
        puts "You chose subtraction"
        puts "choose first number"
        num1 = gets.to_i
        puts "choose second number"
        num2 = gets.to_i
        puts "The answer is #{num1 - num2}"
    when 'd'
        puts "You chose division"
        puts "choose first number"
        num1 = gets.to_i
        puts "choose second number"
        num2 = gets.to_i
        puts "The answer is #{num1 / num2}"
    when 'e'
        puts "You chose exponent"
        puts "choose first number"
        num1 = gets.to_i
        puts "choose second number"
        num2 = gets.to_i
        puts "The answer is #{num1 ** num2}"
    when 'sqr'
        puts "You chose square root"
        puts "choose number"
        num1 = gets.to_i
        puts "The square root of #{num1} is #{Math.sqrt(num1)}"
    when 'bmi'
        puts "You chose BMI calculator"
        puts "What is your height(cm)?: "
        num1 = gets.to_f
        puts "What is your weight(kg)?: "
        num2 = gets.to_f
        BMI = (num2 / num1) / num1
        puts "Your BMI is #{BMI * 10000}"
    when 'trip'
        puts "You chose trip calculator"
        puts "input expected distance in miles: "
        distance = gets.to_f
        puts "input vehicles average fuel consumption (miles per gallon): "
        mpg = gets.to_f
        puts "input current price of fuel (per gallon): "
        ppg = gets.to_f
        puts "input average speed (MPH): "
        mph = gets.to_f
        fuel_calc = distance / mpg
        puts "Your trip is due to take #{distance / mph} minutes and will cost $#{fuel_calc * ppg}"
    else 
        puts "invalid selection, you idiot."
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"
