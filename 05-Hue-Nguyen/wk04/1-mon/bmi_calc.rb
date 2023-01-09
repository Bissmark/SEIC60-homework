# get weight input
def weight(weight_unit)
    print "Enter the weight (#{weight_unit}): "
    weight = gets.to_f
    unless weight > 0
        puts "Invalid weight"
        print "Enter the weight (#{weight_unit}): "
        weight = gets.to_f
    end
    weight
end

# get height input
def height(height_unit)

    print "Enter the height (#{height_unit}): "
    height = gets.to_f
    unless height > 0
        print "Enter the weight (#{height_unit}): "
        height = gets.to_f
    end
    height
end

# do calculation
def bmi_calculator ()
    puts "Choose the units of weight and height"
    puts "[1] - Kilograms and meters"
    puts "[2] - Pounds and inches"
    print "Units are: "
    units = gets.to_i

    # calculate BMI
    case units
    when 1
        w = weight("kg")
        h = height("m")
        bmi = w/ h ** 2
    when 2
        w = weight('lb')
        h = height('in')
        bmi = (w / h ** 2) * 703
    else
        puts "Invalid units"
    end

    puts "BMI is: #{bmi}."
    case bmi
    when 0...18.5
        puts "Weight status: underweight"
    when 18.5..24.9
        puts "Weight status: healthy weight"
    when 25.0..29.9
        puts "Weight status: overweight"
    else
        puts "Weight status: obesity"
    end
end

# run the calculator
def run_calculator()
    bmi_calculator
    print "Do you want to continue? (y/n): "
    answer = gets.chomp.downcase
    until answer == "y"
        bmi_calculator
    end
end

run_calculator