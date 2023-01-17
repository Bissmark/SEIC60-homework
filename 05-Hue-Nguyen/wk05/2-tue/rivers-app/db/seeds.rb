# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

River.destroy_all

River.create :name => 'Nile', :length => 6650, :countries => 'Egypt, Sudan, South Sudan, Ethiopia, Uganda, Democratic Republic of the Congo, Kenya, Tanzania, Rwanda, Burundi', :continent => 'Africa', :sources => 'White Nile, Blue Nile', :mouth => 'Mediterranean Sea', :basin_size => 3349000, :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Evening%2C_Nile_River%2C_Uganda.jpg/390px-Evening%2C_Nile_River%2C_Uganda.jpg'

River.create :name => 'Amazon River', :length => 6500, :countries => 'Peru, Colombia, Brazil', :continent => 'America', :sources => 'Río Apurimac, Mismi Peak', :mouth => 'Atlantic Ocean', :basin_size => 7000000, :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Rio_Amazonas_-_Parintins.jpg/480px-Rio_Amazonas_-_Parintins.jpg'


puts "#{ River.count } rivers created."
