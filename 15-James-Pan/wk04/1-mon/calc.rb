def show_menu
    puts "=-" * 40
    puts "Mega Calculator".center(80)
    puts "=-" * 40 
    puts "Function List:"
    puts "[a] - Add"
    puts "[s] - Substrct"
    puts "[m] - Multiply"
    puts "[d] - Divide"
    puts "[e] - Exponent"
    puts "[sr] - Square Root"
    puts "[mc] - Mortgage Calculator"
    puts "[bmi] - BMI Calculator"
    puts "[tc] - Trip Calculator"
    puts "[q] - Quit"
    puts "--" * 40
    puts "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
    case menu_choice
    when "a"
        puts "You chose Add!"
        print "Please enter the first number: "
        number1 = gets.to_f
        print "Please enter the second number: "
        number2 = gets.to_f
        puts "=-" * 40
        puts "###The result is #{ number1 + number2 }}"
        
    when "s"
        puts "You chose Substract!"
        print "Please enter the first number: "
        number1 = gets.to_f
        print "Please enter the second number: "
        number2 = gets.to_f
        puts "=-" * 40
        puts "###The result is #{ number1 - number2 }"
    when "m"
        puts "You chose Multiply!"
        print "Please enter the first number: "
        number1 = gets.to_f
        print "Please enter the second number: "
        number2 = gets.to_f
        puts "=-" * 40
        puts "###The result is #{ number1 * number2 }"
    when "d"
        puts "You chose Divide!"
        print "Please enter the first number: "
        number1 = gets.to_f
        print "Please enter the second number: "
        number2 = gets.to_f
        puts "=-" * 40
        puts "###The result is #{ number1 / number2 }"
    when "e"
        puts "You chose Exponent!"
        print "Please enter the base: "
        number1 = gets.to_f
        print "Please enter the exponent: "
        number2 = gets.to_f
        puts "=-" * 40
        puts "###The result is #{ number1 ** number2 }"
    when "sr"
        puts "You chose Sqaure Root"
        print "Please enter the number: "
        number1 = gets.to_f
        puts "=-" * 40
        puts "###The result is #{ Math.sqrt(number1) }"
    when "mc"
        puts "You chose Mortgage Calculator"
        print "Please enter the amount borrowed (for exmaple, $100000 => enter 100000): "
        amount = gets.to_f
        print "Please enter the interest rate (for exmaple, 5% => enter 5): "
        interest = gets.to_f
        print "Please enter the length of term (for example, 30 years => enter 30): "
        year = gets.to_f
        result = "#{amount * (interest / 12 / 100 * ((1 + interest / 12 / 100)**(year * 12))/((1 + interest / 12 / 100)**(year * 12) - 1))}"
        puts "=-" * 40
        puts "###The repayment is $#{result.to_f.floor * 12 / 26} per fornight or $#{result.to_f.floor} per month or $#{result.to_f.floor * 12} per year"
    when "bmi"
        puts "You chose BMI Calculator"
        print "Please enter your weight (for exmaple, 80gk => enter 80): "
        weight = gets.to_f
        print "Please enter your height (for exmaple, 1.6m => 1.6): "
        height = gets.to_f
        puts "=-" * 40
        puts "###Your BMI is #{sprintf("%.2f", weight / height**2)} (Healthy range is 18.5 to 24.9)"
    when "tc"
        puts "You chose Trip Calculator"
        print "Please enter the trip distance (for example, 80 miles => enter 80): "
        distance = gets.to_f
        print "Please enter the miles per gallon (for example, 30 miles per gallon => enter 30): "
        miles_per_gallon = gets.to_f
        print "Please enter the price per gallon (for exmaple, $1.7 per gallon => enter 1.7): "
        price_per_gallon = gets.to_f
        print "Please enter your travel speed per hour (for exmaple, 60 miles per hour => enter 60): "
        travel_speed_per_hour = gets.to_f
        puts "###The total fuel cost for the trip is $#{sprintf("%.2f", (distance / miles_per_gallon) * price_per_gallon)} and the travel time is #{sprintf("%.0f", distance / travel_speed_per_hour * 60)} minutes"
    else 
        puts "Invalid selection. Please try again."
    end
    show_menu
menu_choice = gets.chomp.downcase
end

puts "Thanks for using the calculator!".center(80)