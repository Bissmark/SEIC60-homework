Actor.destroy_all

Actor.create(:name => 'Nicholas Cage', :dob => '1999-01-01', :nationality => 'American', :image => 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSgdMa3-zfBbsMOTEYwMDhWumoaLYOb4kbOBP9Mmwdt9AwdzYCaL0VS1zKzlKc5DnPoWUSfVA25uggiN0o')

puts "#{ Actor.count } actors created."

Movie.destroy_all

Movie.create(:title => 'Jaws', :year => '1999', :director => 'Michael Bay', :genre => 'horror', :image => 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSgdMa3-zfBbsMOTEYwMDhWumoaLYOb4kbOBP9Mmwdt9AwdzYCaL0VS1zKzlKc5DnPoWUSfVA25uggiN0o')

puts "#{ Movie.count } movies created."