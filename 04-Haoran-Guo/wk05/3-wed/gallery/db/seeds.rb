Director.destroy_all

Director.create (:name => 'Ang Lee', :nationality => 'Chinese', :dob =>'1954-10-23', :image => 'https://upload.wikimedia.org/wikipedia/commons/e/e2/2016_NAB_Show%27s_The_Future_of_Cinema_Conference%2C_produced_in_partnership_with_SMPTE_%2826717112630%29_%28cropped%29.jpg')
Director.create (:name => 'Steven Spielberg', :nationality => 'American', :dob =>'1946-12-18'; :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ready_Player_One_Japan_Premiere_Red_Carpet_Steven_Spielberg_%2841564864062%29.jpg/1280px-Ready_Player_One_Japan_Premiere_Red_Carpet_Steven_Spielberg_%2841564864062%29.jpg')
Director.create (:name => 'James Wan', :nationality => 'Australian', :dob => '1977-02-26', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/James_Wan_by_Gage_Skidmore_2.jpg/1280px-James_Wan_by_Gage_Skidmore_2.jpg')

puts "#{ Director.count } Directors created"

Movie.destroy_all

Movie.create(:name => 'E.T. the Extra-Terrestrial', :release_date => 'May 26, 1982', :office_box => 749900000.00, :image => 'https://upload.wikimedia.org/wikipedia/en/6/66/E_t_the_extra_terrestrial_ver3.jpg')
Movie.create(:name => 'Brokeback Mountain', :release_date => 'September 2, 2005', :office_box => 178100000.00, :image => 'https://upload.wikimedia.org/wikipedia/en/a/a1/Brokeback_mountain.jpg')
Movie.create(:name => 'The Nun', :release_date => 'September 4, 2018', :office_box => 365600000.00, :image => 'https://upload.wikimedia.org/wikipedia/en/3/34/TheNunPoster.jpg' )

puts "#{ Movie.count } Movies created"
