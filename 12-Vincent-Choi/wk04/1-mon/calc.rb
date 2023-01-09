def show_menu
    puts "Calculator" # TODO: checkout .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing linge
    puts "[a] - Addition"
    puts "[m] - Multiply"
    puts "[d] - Divide"
    puts "[s] - Subtract"
    puts "[e] - Exponents"
    puts "[r] - Square Roots"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase


until menu_choice == 'q'
    print "enter the number1: "
    a = gets.to_f
    print "enter the number2: "
    b = gets.to_f
    case menu_choice
    when 'a'
        puts "You chose addition!"
        puts "The sum of the numbers is #{a + b}"
    when 'm'
        puts "You chose multiplication!"
        puts "The multiplication of the numbers is #{a * b}"
    when 'd'
        puts "You chose division!"
        puts "The division of the numbers is #{a / b}"
    when 's'
        puts "You chose subtraction!"
        puts "The subtraction of the number is #{a - b}"
    when 'e'
        puts "You chose exponents!"
        puts "The exponents of the number is #{a ** b}"
    when 'r'
        puts "You chose square roots!"
        answer = Math.sqrt(a)
        puts "The square root of the number is #{answer}"
        #TODO: actually do the actual addition
    #TODO: add more `when` clauses for subtract, mutiply, divide, etc.
    else
        puts "Invalid selection. You idiot."
    end 

    show_menu
    menu_choice = gets.chomp.downcase   
end



puts "Thanks for using this crappy calculator"

