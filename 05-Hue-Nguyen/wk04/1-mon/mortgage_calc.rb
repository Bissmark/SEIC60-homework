# loan amount
def loan_amount()
    print "Loan amount: "
    gets.to_f
end

# payment term
def payment_term() 
    print "Term between 1 and 99 (years): "
    gets.to_i
end
  
  
# interest
def annual_interest()
    print "Interest(%) btw 0 and 100 (excl): "
    (gets.to_f / 100)
end

# message for invalid input
def invalid_input(input)
    puts "Invalid input of #{input}."
end

# mortgage calculation
def mortgage_calculator() 
    # get inputs
    puts "Mortgage calculator"
    puts "=-" * 20

    # ask the loan amount
    amount = loan_amount
    # keep asking until we get the valid amount
    until amount > 0
        invalid_input("amount")
        amount = loan_amount
    end

    puts "-" * 40

    # ask the payment term
    term = payment_term
    until term > 0 && term < 100
        invalid_input("term")
        term = payment_term
    end

    puts "-" * 40

    # ask the interest
    interest = annual_interest
    until interest > 0 && interest < 1
        invalid_input("interest")
        interest = annual_interest
      end
    
    puts "-" * 40
    
    # calculate monthly payment with the following assumptions: 
    # 1. Fixed interest
    # 2. Pay monthly
    # 3. Pay principal and interest every time
    # Soure of formula: https://math.stackexchange.com/questions/664029/whats-the-math-formula-that-is-used-to-calculate-the-monthly-payment-in-this-mo
    monthly_payment = amount * ( (interest / 12) * ((1 + interest / 12) ** (term * 12)) ) / (((1 + interest / 12) ** (term * 12)) - 1)

    puts "With the loan #{amount}$, annual interest as #{interest * 100}% and term as #{term} years. Your estimated monthly payment is #{monthly_payment}";
end


def run_calculator()
    mortgage_calculator
    print "Do you want to continue? (y/n): "
    answer = gets.chomp.downcase
    until answer == "y"
        mortgage_calculator
    end
end

run_calculator

  