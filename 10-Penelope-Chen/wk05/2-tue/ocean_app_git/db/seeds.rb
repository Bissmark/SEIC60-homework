Ocean.destroy_all

Ocean.create :name => 'Pacific Ocean', :maxdepth => '11022', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7ZBWgkbT2NYj5KQ9KT5d21yXFIccPATr1A&usqp=CAU'
Ocean.create :name => 'Atlantic Ocean', :maxdepth => '8486', :image => 'https://au.expeditions.com/globalassets/expedition-stories/north-atlantic-sea-roads-in-the-wake-of-intrepid-early-seafarers/north-atlantic-ocean-map.jpg?quality=50&maxwidth=1920&format=jpg'
Ocean.create :name => 'Indian Ocean', :maxdepth => '7258', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Color_etopo1_ice_low_indian_ocean_westward_routes.jpg/180px-Color_etopo1_ice_low_indian_ocean_westward_routes.jpg'
Ocean.create :name => 'Arctic Ocean', :maxdepth => '5450', :image => 'https://cdn.britannica.com/53/5853-004-FF0BE165/North-Pole.jpg'
Ocean.create :name => 'Antarctic Ocean', :maxdepth => '7236', :image => 'https://cdn.britannica.com/93/126593-050-DCBA9594/Southern-Ocean.jpg'
Ocean.create :name => 'Frank Ocean', :maxdepth => '2', :image => 'https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg'

puts "#{ Ocean.count } oceans created."
