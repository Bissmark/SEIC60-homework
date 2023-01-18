Architect.destroy_all

Architect.create(:name => 'Zaha Hadid', :nationality => 'Iraqi-British', :dob => '1950-10-31', :image => 'https://cdn.britannica.com/53/189253-004-99AE734A/Zaha-Hadid-Kensington-Gardens-London-Serpentine-Sackler-2013.jpg?s=1500x700&q=85')
Architect.create(:name => 'Tadao Ando', :nationality => 'Japanese', :dob => '1941-09-13', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Tadao_Ando_2004.jpg/601px-Tadao_Ando_2004.jpg?20210911223428')
Architect.create(:name => 'Maya Lin', :nationality => 'Asian-American', :dob => '1959-10-05', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Maya_Lin%2C_2014_%28cropped%29.jpg/220px-Maya_Lin%2C_2014_%28cropped%29.jpg')
Architect.create(:name => 'Bjarke Ingels', :nationality => 'Danish', :dob => '1974-10-02', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bjarke_Ingels.jpg/592px-Bjarke_Ingels.jpg?20121010201120')
Architect.create(:name => 'Florence Mary Taylor', :nationality => 'Australian', :dob => '1879-12-29', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florencetaylor.jpg/220px-Florencetaylor.jpg')
Architect.create(:name => 'Antoni Gaudi', :nationality => 'Spanish', :dob => '1852-06-25', :image => 'https://upload.wikimedia.org/wikipedia/commons/4/42/Antoni_gaudi.jpg')

puts "#{ Architect.count } architects created."

Building.destroy_all

Building.create(:name => 'Guangzhou Opera House', :year => '2010', :style => 'deconstructivism', :location => 'Guangzhou, China', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Guangzhou_Opera_House%28Near%29.JPG/250px-Guangzhou_Opera_House%28Near%29.JPG')
Building.create(:name => 'Church of the Light', :year => '1989', :style => 'modern', :location => 'Ibaraki, Japan', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ibaraki_Kasugaoka_Church_light_cross.jpg/250px-Ibaraki_Kasugaoka_Church_light_cross.jpg')
Building.create(:name => 'Vietnam Veterans Memorial', :year => '1982', :style => 'modern', :location => 'Washington, D.C., USA', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/The_Wall%2C_end_to_end.jpg/280px-The_Wall%2C_end_to_end.jpg')
Building.create(:name => 'Vancouver House', :year => '2020', :style => 'neo-futurism', :location => 'Vancouver, Canada', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Vancouver_House_-_22.jpg/280px-Vancouver_House_-_22.jpg')
Building.create(:name => '100 Sydney houses', :year => '1900-1907', :style => 'victorian', :location => 'Sydney, Australia', :image => 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKAOlUj6jVNYhBEvo0lCRk9lwehWZCITLErdx_6luZ4Yek7v2I')
Building.create(:name => 'La Sagrada Familia', :year => '1882-present', :style => 'gothic-revival', :location => 'Barcelona, Spain', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Sagrada_Familia_2021.jpg/220px-Sagrada_Familia_2021.jpg')

puts "#{ Building.count } buildings created."