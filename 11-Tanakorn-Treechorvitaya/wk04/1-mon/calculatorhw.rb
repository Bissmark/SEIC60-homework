# Calculator

# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu

# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)

# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

def show_menu
    puts "Calculator".center(30,"-")
    puts "*o*" * 10
    puts "[a] - Add"
    puts "[s] - Subtract"
    puts "[m] - Multiply"
    puts "[d] - Divide"
    puts "[e] - Exponents"
    puts "[r] - square roots"
    puts "[l] - logarithm"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    # get the variables
        print "What is your a number: "
        a = gets.to_f
        print "What is your b number: "
        b = gets.to_f
    # arithmetic
        puts case menu_choice
        when 'a'
            get_variables
            a+b
        when 's'
            get_variables
            a-b
        when 'm'
            get_variables
            a*b
        when 'd'
            get_variables
            a/b
        when 'e'
            get_variables
            a ** b
        when 'r'
            get_variables
            a ** (1.0/b)
        when 'l'
            get_variables
            Math.log(a,b)
        else 
            "Invalid selection. Please select function on the menu."
        end
    # show the menu
        show_menu
        menu_choice = gets.chomp.downcase

end

puts "Thanks for using our calculator"