# Do-It-Yourself Ruby REPL
# Try to create your own Ruby REPL (Read Evaluate Print Loop) program.

# It should show a prompt, read some Ruby code from the user, evaluate their code, print the result and loop back to the start.

# Sample Session
# $ ruby repl.rb
# Welcome to Ruby REPL
# > 2 + 7
# 9
# > "some" + "string"
# "somestring"
# >

puts "Welcome to Ruby REPL"
puts "Type exit to quit the loop"
while true
    # get inputs
    print "> " 
    inputs = gets.chomp # > 2 + 7
    # show results
    puts eval(inputs) # 9
end