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
    puts "[r] - Square roots"
    puts "[l] - Logarithm"
    puts "[mortgage] - monthly payment"
    puts "[BMI] - BMI calculation"
    puts "[trip] - time and cost calculation"
    puts "[q] - Quit"
    print "Enter your choice: "
end

def monthly_payment
    puts "Mortgage Calculator".center(30,"-")
    puts "*o*" * 10
    # get variables
    print "Total loan amount (AUD): "
    mortgage_amount = gets.to_f

    print "annual interest rate (decimal): "
    interest_rate = gets.to_f

    print "Total month to pay (month): "
    month_period = gets.to_i

    # calculation
    monthly_percentage = interest_rate ** ( 1.0 / 12 ) - 1
    monthly_payment = mortgage_amount * ( monthly_percentage * ( (1 + monthly_percentage) ** month_period )) / (( (1 + monthly_percentage) ** month_period ) - 1)

    # show result
    puts "Your monthly payment equal to #{ monthly_payment } AUD."
end

def BMI_cal
    puts "BMI Calculator".center(30,"-")
    puts "*o*" * 10
    # get variable
    print "What is your height (cm): "
    height = gets.to_f
    print "What is your weight (kg): "
    weight = gets.to_f
    # show results
    puts "As your height and weight equal to #{ height } cm and #{ weight } kg respectively."
    puts "Therefore, your BMI is #{ weight/ (( height / 100 ) ** 2) }."
end

def trip_cal
    puts "Trip time & cost Calculator".center(30,"-")
    puts "*o*" * 10

    # get variable
    print "distance (mile): "
    distance = gets.to_f

    print "miles per gallon: "
    mile_per_gallon = gets.to_f

    print "price per gallon (AUD): "
    price_per_gallon = gets.to_f

    print "speed in miles per hour: "
    mile_per_hour = gets.to_f

    # show results
    puts "For your inputs, time = #{ distance / mile_per_hour } hours and cost = #{ ( distance / mile_per_gallon ) * price_per_gallon } AUD. "
end

def get_a_b
    # get the variables
    print "What is your first number: "
    $a  = gets.to_f
    print "What is your second number: "
    $b = gets.to_f
end 

show_menu
menu_choice = gets.chomp.downcase
$a = 0
$b = 0

until menu_choice == 'q'

    # arithmetic
        puts case menu_choice
        when 'a'
            get_a_b
            $a+$b
        when 's'
            get_a_b
            $a-$b
        when 'm'
            get_a_b
            $a*$b
        when 'd'
            get_a_b
            $a/$b
        when 'e'
            get_a_b
            $a ** $b
        when 'r'
            get_a_b
            $a ** (1.0/$b)
        when 'l'
            Math.log($a,$b)
        when 'mortgage'
            monthly_payment
        when 'bmi'
            BMI_cal
        when 'trip'
            trip_cal
        else 
            "Invalid selection. Please select function on the menu."
        end
    # show the menu
        show_menu
        menu_choice = gets.chomp.downcase
end

puts "Thanks for using our calculator"