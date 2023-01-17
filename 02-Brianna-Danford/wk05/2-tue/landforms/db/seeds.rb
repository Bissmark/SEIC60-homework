# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Mountain.destroy_all

Mountain.create :name => 'Everest', :elevation => 171, :location => 'Nepal and Tibet'
Mountain.create :name => 'Kilimanjaro', :elevation => 365.25, :location => 'Tanzania'
Mountain.create :name => 'Olympus Mos', :elevation => 211.71, :location => 'Mars'

puts "#{ Mountain.count } mountains created."





# Mountain.destroy.all

# Mountain.create :name => 'Everest', :elevation => 8848, :location => 'Between Nepal and Tibet' 
# Mountain.create :name => 'Kilimanjaro', :elevation => 5895, :location => 'Tanzania'
# Mountain.create :name => 'Olympus Mons', :elevation => 21171, :location => 'Mars'

# puts "#{ Mountain.count } mountains created."