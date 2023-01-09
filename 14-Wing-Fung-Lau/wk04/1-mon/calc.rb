def show_menu
    puts "-" * 40
    puts "Calculator"
    puts "-" * 40
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponent"
    puts "[sr] - Square roots"
    puts "[mc] - Mortgage Calculator"
    puts "[bc] - BMI Calculator"
    puts "[tc] - Trip Calculator"
    puts "[r] - Reset"
    puts "[q] - Quit"
    print "Enter your choice: "


end



show_menu

menu_choice = gets.chomp.downcase

$answer = Float::INFINITY




def calculation(operator)
    if operator == 'sr'
        if $answer == Float::INFINITY
            $answer = 0
        else
            $answer = Math.sqrt($answer)
        end
    else
        print "Enter a number:"
        number = gets.to_i
        if $answer == Float::INFINITY
            print "Enter another number:"
            another_number = gets.to_f
            $answer = eval "#{number} #{operator} #{another_number}"
        else
            $answer = eval "#{$answer} #{operator} #{number}"
        end
    end
    puts "-" * 40
    puts ""
    puts "The total is #{$answer}"
    puts ""
    puts "-" * 40
end



until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You choose Addition!"
        calculation('+')
    when 's'
        puts "You choose Subtraction!"
        calculation('-')
    when 'm'
        puts "You choose Multiplication!"
        calculation('*')
    when 'd'
        puts "You choose Division!"
        calculation('/')
    when 'e'
        puts "You choose Exponent!"
        calculation('**')
    when 'sr'
        puts "You choose Square roots!"
        calculation('sr')
    when 'mc'
        puts "You choose Mortgage Calculator!"
        print "Enter amount borrowed ($): "
        amount_borrowed = gets.to_i

        print "Enter interest rate (%): "
        interest_rate = gets.to_f / 100

        repayment_frequency = ''
        until repayment_frequency == 'y' || repayment_frequency == 'q' || repayment_frequency == 'm'
            puts "Repayment frequency:"
            puts "[y] - Yearly"
            puts "[q] - Quarterly"
            puts "[m] - monthly"
            print "Enter repayment frequency: "
            repayment_frequency = gets.chomp.downcase
        end
        case repayment_frequency
        when 'y'
            repayment_frequency = 1.to_i
        when 'q'
            repayment_frequency = 4.to_i
        when 'm'
            repayment_frequency = 12.to_i
        end

        print "Enter length of loan (years): "
        length_of_loan = gets.to_f

        monthly_payment = amount_borrowed * ( (interest_rate / repayment_frequency) * ( 1 + interest_rate / repayment_frequency) ** (length_of_loan * repayment_frequency) ) / ( (1 + interest_rate / repayment_frequency) ** (length_of_loan * repayment_frequency) - 1 )

        puts "-" * 40
        puts ""
        puts "The monthly payment is #{$monthly_payment}"
        puts ""
        puts "-" * 40
    when 'bc'
        puts "You choose BMI Calculator!"
        print "Enter height (cm): "
        height = gets.to_f
        print "Enter weight (kg): "
        weight = gets.to_f

        bmi = (weight / height ** 2 * 10000).round(1)

        condition = ''
        if bmi < 16.5
            condition = 'severely underweight'
        elsif bmi < 18.5
            condition = 'underweight'
        elsif bmi <= 24.9
            condition = 'normal'
        elsif bmi < 30
            condition = 'overweight'
        else
            condition = 'obese'
        end

        puts "-" * 40
        puts ""
        puts "Your Body Mass Index is #{bmi}. This is considered #{condition}."
        puts ""
        puts "-" * 40
    

    when 'tc'
        puts "You choose Trip Calculator!"
        print "Enter distance (km): "
        distance = gets.to_f
        print "Enter km per liter (km): "
        km_per_liter = gets.to_f
        print "Enter price per liter ($): "
        price_per_liter = gets.to_f
        print "Enter speed in km per hour (km)"
        speed_per_hour = gets.to_f

        trip_time = distance / speed_per_hour
        cost = '%.2f' % (distance / km_per_liter * price_per_liter)

        puts "-" * 40
        puts ""
        puts "The trip time is #{trip_time} hour(s) and the cost is $#{cost}."
        puts ""
        puts "-" * 40



    when 'r'
        $answer = Float::INFINITY
    else
        puts "Invalid seleciton!"
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator."
