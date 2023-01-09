def bmi(weight, height)
    calc = weight / (height ** 2)
    puts "Your BMI is #{calc.round(2)}"
end

bmi 45, 1.4