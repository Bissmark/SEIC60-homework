Game.destroy_all

Game.create :name => 'Super Mario'
Game.create :name => 'World of Warcraft'
Game.create :name => 'Tetris'

puts "#{ Game.count } games created."