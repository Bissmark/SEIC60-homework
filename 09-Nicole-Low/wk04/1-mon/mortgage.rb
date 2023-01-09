def mortgage(loan, interest_rate, num_months)
    interest_rate = interest_rate / 12
    calc1 = interest_rate * ((1 + interest_rate) ** num_months)
    calc2 = (((1 + interest_rate) ** num_months) - 1)
    calc3 = loan * (calc1 / calc2)
    puts "Monthly mortgage payment: $#{calc3.round(2)}"
end

mortgage(100000, 0.06, 180) 