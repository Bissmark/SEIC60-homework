# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Cheese.destroy_all

Cheese.create :name => 'GOUDA', :image => 'https://www.cheese.com/media/img/cheese/GOUDA_SqYJjRh.jpg', :country => 'Netherlands', :family => 'Gouda', :made => 'cow milk, goat milk, or sheep milk', :fat => 31, :color => 'yellow'

Cheese.create :name => 'BRIE', :image => 'https://www.cheese.com/media/img/cheese/Brie_PDCo3RG.jpg', :country => 'France', :family => 'Brie', :made => 'cow milk', :fat => 8.4, :color => 'cream'

Cheese.create :name => 'BLUE VEIN CHEESE', :image => 'https://www.cheese.com/media/img/cheese/blue.jpg', :country => 'countries throughout the world', :family => 'Blue', :made => 'cow milk, goat milk, or sheep milk', :fat => 8.1, :color => 'blue'

Cheese.create :name => 'CHEDDAR', :image => 'https://www.cheese.com/media/img/cheese/wiki/cheddar.jpg', :country => 'England', :family => 'Cheddar', :made => 'cow milk, goat milk, or sheep milk', :fat => 9, :color => 'yellow'

Cheese.create :name => 'MOZZARELLA', :image => 'https://www.cheese.com/media/img/cheese/Mozzarella.jpg', :country => 'Italy', :family => 'Pasta filata', :made => 'cow milk, or water buffalo milk', :fat => 0.4, :color => 'white'

Cheese.create :name => 'PARMESAN', :image => 'https://www.cheese.com/media/img/cheese/Parmesan_1.jpg', :country => 'Italy', :family => 'Parmesan', :made => 'cow milk', :fat => 25.8, :color => 'staw'

puts "#{Cheese.count} Cheeses created."