def show_menu
    puts "Calculator".center(40) # Uses the center method to appear in the middle of the divider
    puts "=" * 40 
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponent"
    puts "[r] - Squre Root"
    puts "[b] - BMI Calculator"
    puts "[mc] - Mortgage Calculator"
    puts "[t] - Trip calculator"
    puts "[q] = Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

def calculator_function(calculation)
    case calculation
    when '+'
    puts "Lets do some addition!"
    print "First number to add: "
    first_number = gets.to_f
    print "Second number to add: "
    second_number = gets.to_f
    puts "\n#{first_number} + #{second_number} = #{first_number + second_number} \n \n"        
    when '-'
    puts "Lets do some subtraction!"
    print "First number to subtract: "
    first_number = gets.to_f
    print "Second number to subtract: "
    second_number = gets.to_f
    puts "\n#{first_number} - #{second_number} = #{first_number - second_number} \n \n"
    when '*'
    puts "Lets do some multiplication!"
    print "First number to multiply: "
    first_number = gets.to_f
    print "Second number to multiply: "
    second_number = gets.to_f
    puts "\n#{first_number} * #{second_number} = #{first_number * second_number} \n \n"
    when '/'
    puts "Lets do some division!"
    print "First number to divide: "
    first_number = gets.to_f
    print "Second number to divide: "
    second_number = gets.to_f
    puts "\n#{first_number} / #{second_number} = #{first_number / second_number} \n \n"
    when '**'
    puts "Lets do some exponents!"
    print "First number to exponent: " # No clue what the verb for exponent is 
    first_number = gets.to_f
    print "Second number to exponent: "
    second_number = gets.to_f
    puts "\n#{first_number} ** #{second_number} = #{first_number ** second_number} \n \n"
    when '√' # Should probably figure out what encoding ruby uses, asume system for now
    puts "Let's square root something"
    puts "Number to square root"
    first_number = gets.to_f
    puts "\n √#{first_number} =  #{Math.sqrt(first_number)} \n \n"
    when 'bmi'
    # Formula: weight (kg) / [height (m)]2
    puts "Let's calculate your Body Max Index BMI"
    puts "What is your weight in kilograms?"
    kg = gets.to_f
    puts "What is your heigh in meters?"
    height = gets.to_f
    puts "Your BMI is #{ kg / (height**2)}"
    when 'mc'
    # Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    puts "What did you borrow?"
    p = gets.to_f
    puts "How much interest are you paying?"
    i = gets.to_f
    puts "How many months left on your loan?"
    n = gets.to_f
    months = p*((i*(1 + i)**n) / ((1 + i)**n - 1)) # TODO: Fix calculation, look into order of operations
    years = months / 12
    puts "You've got #{months.ceil} months left or #{years.ceil} years" 
    when 't'
    puts "How far is the destination in kilometers?"
    distance = gets.to_f
    puts "What is your cars km per litre?"
    fuel_eco = gets.to_f
    puts "What did you pay for petrol (dollars per a litre)?"
    price = gets.to_f
    puts "How fast did you go in km per hour?"
    speed = gets.to_f
    trip_time = distance * speed # TODO: Find the right formulas
    trip_cost = price * distance
    puts "It will take #{trip_time} hours and cost $#{trip_cost}"
    when 'h'
    puts "This is a calculator only use numbers e.g. 5 not five
    Likewise, don't use units like kg or %"
    end
end

until menu_choice == 'q'
    #do what they asked for
    case menu_choice
    when 'a'
        calculator_function '+'
    when 's'
        calculator_function '-'
    when 'm'
        calculator_function '*'
    when 'd'
        calculator_function '/'
    when 'e'
        calculator_function '**'
    when 'r'
        calculator_function '√'
    when 'b'
        calculator_function 'bmi'
    when 'mc'
        calculator_function 'mc'
    when 't'
        calculator_function 't'
    else 
        puts "Invalid selection"
    end
    # Gives time for the user to see the anwer before calling the menu
    puts "Enter any key to see menu" 
    anykey = gets

    show_menu
    menu_choice = gets.chomp.downcase
end
puts "Thanks for using this calculator, program will now quit..."