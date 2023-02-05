Team.destroy_all

Team.create(:name => 'Shohoku', :province => 'Kanagawa District', :rank => 0, :color => 'red/black/white', :image => 'https://cdn.myanimelist.net/s/common/uploaded_files/1449473246-6f2641abac9bb998d1f56bf161f8ce65.jpeg')
Team.create(:name => 'Kainan', :province => 'Kanagawa District', :rank => 2, :color => 'purple/olive/white', :image => 'https://static.wikia.nocookie.net/slamdunk/images/6/6f/Kainan_High.jpg/revision/latest?cb=20180330204928')
Team.create(:name => 'Ryonan', :province => 'Kanagawa District', :rank => 3, :color => 'blue/yellow/white', :image => 'https://static.wikia.nocookie.net/slamdunk/images/d/d2/Ryonan.png/revision/latest?cb=20141126104642')
Team.create(:name => 'Sannoh', :province => 'Akita Distrcit', :rank => 1, :color => 'black/white', :image => 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Portrait_of_Sidney_Nolan.jpg')
Team.create(:name => 'Shoyo', :province => 'Australian', :rank => '1920-07-24', :color => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/en/9/98/Arthur_Boyd.jpg')
Team.create(:name => 'Toyotama', :province => 'Australian', :rank => '1921-07-26', :color => '20th century', :image => 'https://upload.wikimedia.org/wikipedia/en/b/b0/Australian_Team_Jeffrey_Smart.jpg')

puts "#{ Team.count } teams formed."

Player.destory_all

Player.create(:name => 'Guangzhou Opera House', :year => '2010', :style => 'deconstructivism', :location => 'Guangzhou, China', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Guangzhou_Opera_House%28Near%29.JPG/250px-Guangzhou_Opera_House%28Near%29.JPG')
Player.create(:name => 'Church of the Light', :year => '1989', :style => 'modern', :location => 'Ibaraki, Japan', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ibaraki_Kasugaoka_Church_light_cross.jpg/250px-Ibaraki_Kasugaoka_Church_light_cross.jpg')
Player.create(:name => 'Vietnam Veterans Memorial', :year => '1982', :style => 'modern', :location => 'Washington, D.C., USA', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/The_Wall%2C_end_to_end.jpg/280px-The_Wall%2C_end_to_end.jpg')
Player.create(:name => 'Vancouver House', :year => '2020', :style => 'neo-futurism', :location => 'Vancouver, Canada', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Vancouver_House_-_22.jpg/280px-Vancouver_House_-_22.jpg')
Player.create(:name => '100 Sydney houses', :year => '1900-1907', :style => 'victorian', :location => 'Sydney, Australia', :image => 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKAOlUj6jVNYhBEvo0lCRk9lwehWZCITLErdx_6luZ4Yek7v2I')
Player.create(:name => 'La Sagrada Familia', :year => '1882-present', :style => 'gothic-revival', :location => 'Barcelona, Spain', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Sagrada_Familia_2021.jpg/220px-Sagrada_Familia_2021.jpg')

puts "#{ Player.count } players drafted."

