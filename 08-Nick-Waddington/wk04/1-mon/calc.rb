def my_puts(str)
    puts str.center(75)
  end

def show_menu
    my_puts "Calculator " 
    puts "=-" * 40
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[d] - Divide"
    puts "[m] - Multiply"
    puts "[q] - Quit"
    puts "[e] - Exponent"
    puts "[sr] - Square Root"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    #do what they asked for
    case menu_choice
    when "a"

        puts "Addition"
        num1 = gets.to_i 
        num2 = gets.to_i
        puts "The answer is #{ num1 + num2 }."        
        show_menu
        menu_choice = gets.chomp.downcase

    when "s"

        puts "Subtraction"
        num1 = gets.to_i 
        num2 = gets.to_i
        puts "The answer is #{ num1 - num2 }."
        show_menu
        menu_choice = gets.chomp.downcase

    when "d"

        puts "Divide"
        num1 = gets.to_f 
        num2 = gets.to_f
        ans = num1 / num2
        puts "The answer is #{ ans.round(1) }."
        show_menu
        menu_choice = gets.chomp.downcase

    when "m"

        puts "Multiply"
        num1 = gets.to_i 
        num2 = gets.to_i
        puts "The answer is #{ num1 * num2 }."
        show_menu
        menu_choice = gets.chomp.downcase

    when "e"

        puts "Exponent"
        num1 = gets.to_i 
        num2 = gets.to_i
        puts "The answer is #{ num1 ** num2 }."
        show_menu
        menu_choice = gets.chomp.downcase

    when 'sr'

        puts "Square Root"
        num1 = gets.to_i 
        puts "The answer is #{ Math.sqrt(num1) }."
        show_menu
        menu_choice = gets.chomp.downcase

    else
        puts "Invalid selection. Try again."
    end
end

puts "Thank you for using this brilliant calculator."

