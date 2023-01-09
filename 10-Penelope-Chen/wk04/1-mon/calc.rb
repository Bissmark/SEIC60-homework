def show_menu 
    puts "Calculator".center(78) # added .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line :D
    puts "[a] - Addition"
    # added other operations here (multiply, divide, subtract) 
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[s] - Subtraction"
    puts "[e] - Exponentiation"
    puts "[sr] - Square Root"
    puts "[mg] - Mortgage Calculation"
    puts "[bmi] - BMI Calculation"
    puts "[t] - Trip Calculation"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu 
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    # do the thing they asked for 
    case menu_choice
    when 'a'
        puts "You chose addition!"
        puts "Enter 1st number."
        # working out the actual addition...
        num1 = gets.to_i 
        puts "Enter 2nd number."
        num2 = gets.to_i
        puts "The sum of #{ num1 } & #{ num2 } = #{ num1 + num2 } "
    # added more 'when' clauses for subtract, multiply, divide, etc.
    when 'm'
        puts "You chose multiplication!"
        puts "Enter 1st number."
        num1 = gets.to_i 
        puts "Enter 2nd number."
        num2 = gets.to_i
        puts "The multiplication of #{ num1 } & #{ num2 } = #{ num1 * num2 } "
    when 'd'
        puts "You chose division!"
        puts "Enter 1st number."
        num1 = gets.to_i 
        puts "Enter 2nd number."
        num2 = gets.to_i
        puts "The division of #{ num1 } & #{ num2 } = #{ num1 / num2 } "
    when 's'
        puts "You chose subtraction!"
        puts "Enter 1st number."
        num1 = gets.to_i 
        puts "Enter 2nd number."
        num2 = gets.to_i
        puts "The subtraction of #{ num1 } & #{ num2 } = #{ num1 - num2 } "
    when 'e'
        puts "You chose exponentiation!"
        puts "Enter 1st number."
        num1 = gets.to_i 
        puts "Enter 2nd number."
        num2 = gets.to_i
        puts "The power of #{ num1 } to #{ num2 } = #{ num1 ** num2 } "
    when 'sr'
        puts "You chose square root!"
        puts "Enter a number."
        num1 = gets.to_i
        puts "The square root of #{ num1 } = #{ Math.sqrt(num1) }"
    when 'mg' 
        puts "You chose mortgage calculation!"
        puts "Enter loan amount"
        loan = gets.to_i
        puts "Enter length of time in months"
        time = gets.to_i
        puts "Enter interest rate"
        rate = gets.to_f/100

        i = (1 + rate / 12) ** (12/12) - 1
        annuity = (1 - (1 / (1 + i)) ** time) / i 

        payment = loan / annuity 
        puts "\n$%.2f per month" % [payment]
    when 'bmi'
        puts "You chose BMI calculation!"
        puts "Enter weight in kg"
        weight = gets.to_i
        puts "Enter height in m"
        height = gets.to_f
        puts "Your BMI is #{ weight / height ** 2}"
    when 't'
        puts "You chose Trip Calculation!"
        puts "Enter distance in km"
        distance = gets.to_i # 80
        puts "Enter km/litre"
        km_per_l = gets.to_f # 0.058km/litre
        puts "Enter cost in cents/litre"
        cost = gets.to_i # 1.5
        puts "Enter speed in km/hr"
        speed = gets.to_i # 60
        puts "Your approximate trip time is #{ distance / speed } minutes & your cost for this trip is $#{ distance * km_per_l * cost * 100 }."
    else 
        puts "Invalid selection. You idiot."
    end
    
    # showing the menu again 
    show_menu 
    menu_choice = gets.chomp.downcase
end 

puts "Thanks for using this crappy calculator"