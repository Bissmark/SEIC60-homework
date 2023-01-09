# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

# M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1].
# M = Total monthly payment.
# P = The total amount of your loan.
# I = Your interest rate, as a monthly percentage.
# I = root 12 for annual interest rate minus 1
# N = The total amount of months in your timeline for paying off your mortgage.

def monthly_payment
    puts "Mortgage Calculator".center(30,"-")
    puts "*o*" * 10
    # get variables
    print "Total loan amount (AUD): "
    mortgage_amount = gets.to_f

    print "annual interest rate (decimal): "
    interest_rate = gets.to_f

    print "Total month to pay (month): "
    month_period = gets.to_i

    # calculation
    monthly_percentage = interest_rate ** ( 1.0 / 12 ) - 1
    monthly_payment = mortgage_amount * ( monthly_percentage * ( (1 + monthly_percentage) ** month_period )) / (( (1 + monthly_percentage) ** month_period ) - 1)

    # show result
    puts "Your monthly payment equal to #{ monthly_payment } AUD."
end

monthly_payment