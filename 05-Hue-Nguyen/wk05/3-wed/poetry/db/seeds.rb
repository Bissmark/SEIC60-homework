# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Poet.destroy_all
Poet.create(:name => 'Emily Dickinson', :nationality => 'American', :dob => '1830-10-10', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Black-white_photograph_of_Emily_Dickinson2.png/800px-Black-white_photograph_of_Emily_Dickinson2.png')
Poet.create(:name => 'Rabindranath Tagore', :nationality => 'India', :dob => '1861-05-07', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rabindranath_Tagore_unknown_location.jpg/330px-Rabindranath_Tagore_unknown_location.jpg')

puts "#{ Poet.count } created!"

Poem.destroy_all
Poem.create(:name => 'I Know Why the Caged Bird Sings', :genre => 'Autobiography', :original =>
"I know why the caged bird sings, ah me,\r\n
When his wing is bruised and his bosom sore,\r\n
When he beats his bars and would be free;\r\n
It is not a carol of joy or glee,\r\n
But a prayer that he sends from his heart's deep core,\r\n
But a plea, that upward to Heaven he flings\r\n
I know why the caged bird sings.")
Poem.create(:name => "On the Pulse of Morning", :genre => "Autobiographical",)
