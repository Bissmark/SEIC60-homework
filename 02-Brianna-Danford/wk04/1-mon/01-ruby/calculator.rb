def show_menu
    puts "Calculator" #TODO: check out .center to make this look nicer
    puts "=-" * 40 #Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[q] - Quit"
    print "Enter your choice: "
end 

# 
def add (num1, num2)
    result = num1 + num2
    return result
end 

def subtract (num1, num2)
    result = num1 - num2
    return result
end 

def multiply (num1, num2)
    result = num1 * num2
    return result
end

def divide (num1, num2)
    result = num1 / num2
    return result 
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition"
        puts "Enter the first number: "
        num1 = gets.chomp.to_f
        puts "Enter the second number: "
        num2 = gets.chomp.to_f
        result = add(num1, num2)
        puts "The answer is #{ result }"

#         def add (num1, num2)
#             result = num1 + num2
#             return result
# end
    when 's' 
        puts "You chose subtraction"
        puts "Enter the first number: "
        num1 = gets.chomp.to_f
        puts "Enter the second number: "
        num2 = gets.chomp.to_f
        result = subtract(num1, num2)
        puts "The answer is #{ result }"
         

#         def subtract (num1, num2)
#             result = num1 - num2
#             return result
# end
    when 'm'
        puts "You chose multiplication" 
        puts "Enter the first number: "
        num1 = gets.chomp.to_f
        puts "Enter the second number: "
        num2 = gets.chomp.to_f
        result = multiply(num1, num2)
        puts "The answer is #{ result }"

#         def multiply (num1, num2)
#             result = num1 * num2
#             return result
# end
    when 'd' 
        puts "You chose division"
        puts "Enter the first number: "
        num1 = gets.chomp.to_f
        puts "Enter the second number: "
        num2 = gets.chomp.to_f
        result = divide(num1, num2)
        puts "The answer is #{ result }"
#         def divide (num1, num2)
#             result = num1 / num2
#             return result 
# end
    else 
        puts "Invalid selection."
    end
show_menu
menu_choice = gets.chomp.downcase
end 
puts "Thanks for using this calculator!" 





