def choice(choice)
    puts "You chose #{choice}"
  end
  
  def input(num_th = '')
    print "Enter the parameter #{num_th}: "
    gets.to_i
  end
  
  def show_menu
    puts 'Calculator' # TODO: check out. center to make this look nicer
    puts '=-' * 40 # Budget horizontal dividing line
    puts '[a] - Addition'
    puts '[s] - Subtraction'
    puts '[m] - Multiplication'
    puts '[d] - Division'
    puts '[sq] - Square'
    puts '[sqrt] - Square root'
    puts '[r] - Remainder'
    puts '[q] - Quit'
    print 'Enter your choice: '
  end
  
  show_menu
  menu_choice = gets.chomp.downcase
  
  until menu_choice == 'q'
  
    case menu_choice
    when 'a'
      choice('addition')
      a = input(1)
      b = input(2)
      puts "Addition of #{a} and #{b} is #{a + b}"
    when 's'
      choice('subtraction')
      a = input(1)
      b = input(2)
      puts "Subtraction of #{a} and #{b} is #{a - b}"
    when 'm'
      choice('mutiply')
      a = input(1)
      b = input(2)
      puts "Mutiply of #{a} and #{b} is #{a * b}"
    when 'd'
      choice('division')
      a = input(1)
      b = input(2)
      puts "Division of #{a} and #{b} is #{a / b}"
    when 'sq'
      choice('square')
      a = input
      puts "Square of #{a} is #{a**2}"
    when 'sqrt'
      choice('square root')
      a = input
      puts "Square root of #{a} is #{Math.sqrt(a)}"
    when 'r'
      choice('remainder')
      a = input(1)
      b = input(2)
      puts "Remainder root of #{a} and #{b} is #{a % b}"
    when 'q'
      break
    else
      puts 'Invalid selection. Choose a valid one.'
    end
    show_menu
    menu_choice = gets.chomp.downcase
  end
  
  puts 'Thanks for choosing this crappy calculator.'