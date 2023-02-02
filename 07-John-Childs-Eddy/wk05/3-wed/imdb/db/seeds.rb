# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Director.destroy_all

Director.create(:name => 'Michael Bay', :nationality => 'USA', :genre => 'Action CGF', :rating => 'Terrible', :image => 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Michael.bay.png')
Director.create(:name => 'Quentin Tarantino', :nationality => 'USA', :genre => 'Funny Gore', :rating => 'Awesome', :image => 'https://media.gettyimages.com/id/96286132/photo/director-quentin-tarantino-arrives-at-the-62nd-annual-directors-guild-of-america-awards-at-the.jpg?s=612x612&w=gi&k=20&c=7LpB1VkSS1TF7WB0npkBxPMBY-cVGneDEdWNebD2ew4=')
Director.create(:name => 'Stephen Spielberg', :nationality => 'USA', :genre => 'Family', :rating => 'Nice', :image => 'https://upload.wikimedia.org/wikipedia/commons/6/67/Steven_Spielberg_by_Gage_Skidmore.jpg')
Director.create(:name => 'Austin Powers', :nationality => 'English Baby', :genre => 'Smooth', :rating => 'Funky', :image => 'https://media.gettyimages.com/id/83082910/photo/austin-powers-impersonator-richard-halpern-arrives-at-afis-night-at-the-movies-presented-by.jpg?s=612x612&w=gi&k=20&c=aq7UTvQ8Bc9mwnHGA1X-HWQvqM4ctgEOMOMmlJU-YPU=')
Director.create(:name => 'Michael Meyers', :nationality => 'Canuck', :genre => 'Spooky', :rating => 'Halloween', :image => 'https://i.pinimg.com/originals/a7/d2/c1/a7d2c1426798aa2d5a9bbb2c7b5c7c08.jpg')
Director.create(:name => 'David Wolff', :nationality => 'USA', :genre => 'Crime', :rating => 'Older Folks Love It', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHX2lTAbCZ5C77qylgdgW09aLP_mxawW3ZcjFI5_-zyLRy81fI4aXdP6jX5He_xmzsXxM&usqp=CAU')

puts "#{ Director.count } directors created."

Movie.destroy_all

Movie.create(:name => 'Transformers', :director_id => '', :genre => 'Action CGF', :rating => 'Cool Cool', :image => 'https://www.gamespot.com/a/uploads/scale_medium/1561/15611758/3241258-optimus-prime.jpg')
Movie.create(:name => 'Pulp Fiction', :director_id => '', :genre => 'John Travoltas Cool Days', :rating => 'Funky Dunk', :image => 'https://pics.filmaffinity.com/Pulp_Fiction-673650525-large.jpg')
Movie.create(:name => 'From Dusk Till Dawn', :director_id => '', :genre => 'Vampires', :rating => 'Grusome', :image => 'https://img.texasmonthly.com/2013/11/968full-from-dusk-till-dawn-screenshot_0.jpg?auto=compress&crop=faces&fit=crop&fm=jpg&h=900&ixlib=php-3.3.1&q=45&w=1600')
Movie.create(:name => 'Jackie Brown', :director_id => '', :genre => 'Funny', :rating => 'Kind of Boring', :image => 'https://i.guim.co.uk/img/media/65656a2f78d26c63b00b63061c38e1cf67c79c4f/0_61_1819_1091/master/1819.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=19b7df700dae89e83fa87ee199153808')
Movie.create(:name => 'Kill Bill', :director_id => '', :genre => 'Martial Arts', :rating => 'Awesome', :image => 'https://m.media-amazon.com/images/M/MV5BMTUwNzY4ODY3OV5BMl5BanBnXkFtZTgwNDc4MzA4MTI@._V1_.jpg')
Movie.create(:name => 'Austin Powers', :director_id => '', :genre => 'Oh Austin', :rating => 'Fun Fun Fun', :image => 'https://cdn.vox-cdn.com/thumbor/T3YizP1I2fYu17bfwUQsQGh9hIg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23434267/austin_powers_newlinecinema_002.jpeg')
Movie.create(:name => 'Austin Powers II', :director_id => '', :genre => 'Oh Austin', :rating => 'Fun Fun Fun', :image => 'https://images.moviesanywhere.com/07edeef2bebb62676c2e4e7f92f1a64f/488fa6f1-e92f-44b5-afe1-679a4e6e5728.jpg?w=2560&r=16x9')

puts "#{ Movie.count } movies created."