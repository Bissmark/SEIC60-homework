Director.destroy_all

Director.create(:name => 'Akira Kurosawa', :dob => '1910-03-23', :nationality => 'Japanese', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Akirakurosawa-onthesetof7samurai-1953-page88.jpg/800px-Akirakurosawa-onthesetof7samurai-1953-page88.jpg')
Director.create(:name => 'Rainer Werner Fassbinder', :dob => '1945-05-31', :nationality => 'German', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/PER51895_061.jpg/800px-PER51895_061.jpg')
Director.create(:name => 'Ingmar Bergman', :dob => '1918-07-14', :nationality => 'Swedish', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ingmar_Bergman_%281966%29.jpg/220px-Ingmar_Bergman_%281966%29.jpg')

puts "#{ Director.count } directors created."

Movie.destroy_all

Movie.create(:title => 'Seven Samurai', :year => '1954', :language => 'Japanese', :genre => 'Samurai', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Seven_Samurai_poster.jpg/424px-Seven_Samurai_poster.jpg')
Movie.create(:title => 'Fox and His Friends', :year => '1975', :language => 'German', :genre => 'Romance', :image => 'https://upload.wikimedia.org/wikipedia/en/c/c4/Faustrecht-der-Freiheit.png')
Movie.create(:title => 'Music in Darkness', :year => '1948', :language => 'Swedish', :genre => 'Drama', :image => 'https://upload.wikimedia.org/wikipedia/en/5/5c/Music_in_Darkness.jpg')

puts "#{ Movie.count } movies created."
