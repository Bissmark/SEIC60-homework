puts "Welcome to ruby REPL"

while true
    print "> "
    input = gets.chomp
    puts eval input
end


