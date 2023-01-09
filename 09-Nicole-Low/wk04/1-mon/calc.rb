def show_menu
    puts ""
    puts "Calculator".center(30)
    puts "------------------------------"
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponent"
    puts "[sr] - Square Root"
    puts "[q] - Quit"
    puts "------------------------------"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp

# keep looping until the user quits
until menu_choice == 'q'

    if menu_choice == 'sr'
        print "Enter the number: "
        num = gets.chomp.to_i
        puts "Calculation: #{Math.sqrt(num)}"
        
    else
        print "Enter the first number: "
        num1 = gets.chomp.to_i
        print "Enter the second number: "
        num2 = gets.chomp.to_i

        case menu_choice
        when 'a'
            puts "Calculation: #{num1 + num2}"
        when 's'
            puts "Calculation: #{num1 - num2}"
        when 'm'
            puts "Calculation: #{num1 * num2}"
        when 'd'
            puts "Calculation: #{num1 / num2}"
        when 'e'
            puts "Calculation: #{num1 ** num2}"
        end 
    end

    show_menu
    menu_choice = gets.chomp
end
