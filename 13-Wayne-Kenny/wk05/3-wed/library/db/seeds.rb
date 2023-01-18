Author.destroy_all

Author.create(:name => 'Norman Lindsay', :nationality => 'Australian')
Author.create(:name => 'Russell Drysdale', :nationality => 'Australian')
Author.create(:name => 'James Gleeson', :nationality => 'Australian')
Author.create(:name => 'Sidney Nolan', :nationality => 'Australian')
Author.create(:name => 'Arthur Boyd', :nationality => 'Australian')
Author.create(:name => 'Jeffrey Smart', :nationality => 'Australian')
Author.create(:name => 'Brett Whiteley', :nationality => 'Australian')

puts "#{ Author.count } authors created."

Book.destroy_all

Book.create(:title => 'The Thief', :year => '1929', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')
Book.create(:title => 'The Rabbiters', :year => '1947', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=5520')
Book.create(:title => 'The Darkening Stage', :year => '1991', :image => 'https://content.ngv.vic.gov.au/col-images/api/EPUB001055/1280')
Book.create(:title => 'Carcass', :year => '1953', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=57510')
Book.create(:title => 'Bride Running Away', :year => '1957', :image => 'http://www.abc.net.au/news/image/4197918-3x2-940x627.jpg')
Book.create(:title => 'Portrait of Clive James', :year => '1991', :image => 'https://media.artgallery.nsw.gov.au/thumbnails/collection_images/2/276.1992%23%23S.jpg.505x464_q85.jpg')
Book.create(:title => 'The Naked Studio', :year => '1981', :image => 'https://mona.net.au//media/37522/brett-whiteley-the-naked-studio-mona-01.jpg')

puts "#{ Book.count } books created."