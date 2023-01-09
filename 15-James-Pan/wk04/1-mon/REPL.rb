loop do 
    print ">> "
    code = gets.chomp
    break if code == "q"

    puts eval(code)
end