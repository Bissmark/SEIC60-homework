def show_menu
    puts "Calculator".center(50) #TODO: .center 
    puts "-" * 50 
    puts "[a] - Addition"
    puts "[b] - Subtraction"
    puts "[c] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponentiation"
    puts "[f] - Square Root"
    puts "[g] - Mortgage Calculator"
    puts "[h] - BMI"
    puts "[i] - Trip Calculator"
    puts "[q] - Quite"


    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase 

def add(a,b)
    a + b 
end 

def sub(a,b)
    a - b 
end

def mul(a,b)
    a * b 
end

def div(a,b)
    a.to_f / b 
end

def exp(a, b)
    a ** b 
end

def square_root(a)
    Math.sqrt(a)
end 


until menu_choice == 'q'
    # 1. do the cal
    puts case menu_choice
    when 'a'
        puts "You choose addition! Enter 2 numbers: "
        a = gets.chomp.to_f
        b = gets.chomp.to_f
        add(a,b)
        
    when 'b'
        puts "You choose subtraction! Enter 2 numbers: "
        a = gets.chomp.to_f
        b = gets.chomp.to_f
        sub(a,b)
        
    when 'c'
        puts "You choose multiplication! Enter 2 numbers: "
        a = gets.chomp.to_f
        b = gets.chomp.to_f
        mul(a,b)
        
    when 'd'
        puts "You choose division! Enter 2 numbers: "
        a = gets.chomp.to_f
        b = gets.chomp.to_f
        if b == 0
            puts "Division by zero! Enter your numbers again: "
            a = gets.chomp.to_f
            b = gets.chomp.to_f
        else
            puts div(a,b)
        end 

    when 'e'
        puts "You choose exponentiation! Enter 2 numbers: "
        a = gets.chomp.to_f
        b = gets.chomp.to_i
        exp(a,b)
        
    when 'f'
        puts "You choose square root! Enter your number: "
        a = gets.chomp.to_f
        square_root(a)

    when 'g'
        puts "You choose Mortgage Calculator!"
        print "How much did you borrow? "
        a = gets.chomp.to_f
        print "How much is the current rate? "
        b = gets.chomp.to_f
        c = mul(a,b)
        print "What's the term of your mortgage? "
        d = gets.chomp.to_i
        div(c,d)
    
    when 'h'
        puts "You choose BMI! Enter your weight (in kilogram): "
        weight = gets.chomp.to_f
        puts "Enter your height (in meter): "
        height = gets.chomp.to_f
        div(weight, exp(height, 2))

    when 'i'
        puts "You choose Trip Calculator! Enter the distance (in miles): "
        distance = gets.chomp.to_f
        puts "Enter miles per gallon: "
        miles_per_gal = gets.chomp.to_f
        puts "Enter price per gallon: "
        price_per_gal = gets.chomp.to_f
        puts "speed in miles per hour: "
        speed_in_miles_per_hour = gets.chomp.to_f

        total_cost = mul(mul(distance, miles_per_gal), price_per_gal)
        print "The petrol cost is #{ total_cost }"
        print "\n"
        total_duration = div(distance, speed_in_miles_per_hour)
        print "The trip time is #{ total_duration }"

    else 
        puts "Invalid selection. Choose again"
    end 

    # show the menu again
    show_menu
    menu_choice = gets.chomp.downcase 
end 

puts "Thanks for using this crappy calculator :)"