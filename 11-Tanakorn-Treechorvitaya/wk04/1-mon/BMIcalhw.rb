# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

def BMI_cal
    # get variable
    print "What is your height (cm): "
    height = gets.to_f
    print "What is your weight (kg): "
    weight = gets.to_f
    # show results
    puts "As your height and weight equal to #{ height } cm and #{ weight } kg respectively."
    puts "Therefore, your BMI is #{ weight/ (( height / 100 ) ** 2) }"
end