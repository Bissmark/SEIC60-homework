def show_menu
    puts "=-" * 40
    puts "Calculator".center(80) # TODO: cehck out .center to mkae this look nicer
    puts "=-" * 40 # Budget horizontal dividing line
    puts "[a] - Addition" # TODO: add other opertioans here (multiply, divide, subtract)
    puts "[m] - Multiplication"
    puts "[s] - Subtraction"
    puts "[d] - Division"
    puts "[sqr] - Square Root"
    puts "[e] - Exponential"
    puts "[mor] - Mortgage"
    puts "[q] - Quit"
    print "Enter your choice: " 
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
    
    case menu_choice
        
    when "a"
        puts "You chose addition!"
        print "Enter the first value " 
        num1 = gets.to_i
        print "Enter the second value  " 
        num2 = gets.to_i
        answer = num1 + num2
        puts "-" * 40
        puts "The answer is #{ answer }"
        puts "-" * 40

    when "m"
        puts "You chose multiplication"
        print "Enter the first value " 
        num1 = gets.to_i
        print "Enter the second value  " 
        num2 = gets.to_i
        answer = num1 * num2
        puts "-" * 40
        puts "The answer is #{ answer }"
        puts "-" * 40

    when "s"
        puts "You chose subtraction"
        print "Enter the first value " 
        num1 = gets.to_i
        print "Enter the second value  " 
        num2 = gets.to_i
        answer = num1 - num2
        puts "-" * 40
        puts "The answer is #{ answer }"
        puts "-" * 40

    when "d"
        print "Enter the first value " 
        num1 = gets.to_i
        print "Enter the second value  " 
        num2 = gets.to_i
        answer = num1 / num2
        puts "-" * 40
        puts "The answer is #{ answer }"
        puts "-" * 40

    when "sqr"
        print "Enter the value " 
        num1 = gets.to_i
        answer = Math.sqrt(num1)
        puts "-" * 40
        puts "The answer is #{ answer }"
        puts "-" * 40

    when "e"
        print "Enter the first value " 
        num1 = gets.to_i
        print "Enter the second value  " 
        num2 = gets.to_i
        answer = num1 ** num2
        puts "-" * 40
        puts "The answer is #{ answer }"
        puts "-" * 40

    # when "mor"
    #     print "Enter the total loan amount " 
    #     p = gets.to_i
    #     print "Enter your interest rate  " 
    #     i = gets.to_i/12
    #     print "Enter your total loan period in years  " 
    #     n = gets.to_i*12
    #     answer = p * ( i * (1 + i) **n ) / ( (1 + i) **n – 1)
    #     puts "The answer is #{ answer }"

    else 
        puts "Invalid selection."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

print "Thanks for using this crappy calculator"
