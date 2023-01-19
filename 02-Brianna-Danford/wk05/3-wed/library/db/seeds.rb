Book.destroy_all

Book.create(:title => 'Pride and Prejudice', :year => '1813', :genre => 'Classic Regency Fiction', :image => 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1461620558l/1886._SY475_.jpg')
Book.create(:title => 'Carmilla', :year => '1872', :genre => 'Gothic Horror Fiction', :image => 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602511870l/55648601._SY475_.jpg
')
Book.create(:title => 'Six of Crows', :year => '2015', :genre => 'Fantasy Fiction', :image => 'https://grishaverse.com/?jet_download=1515')
Book.create(:title => 'Piranesi', :year => '2020', :genre => 'Fantasy Fiction', :image => 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781635575644.jpg')

puts "#{ Book.count } works created."


Author.destroy_all

Author.create(:name => 'Jane Austen', :nationality => 'British', :dob => '1775-12-16', :image => 'https://cdn.britannica.com/12/172012-050-A9AFF8AF/Jane-Austen-Cassandra-engraving-portrait-1810.jpg')
Author.create(:name => 'Sheridan Le Fanu', :nationality => 'Irish', :dob => '1814-08-28', :image => 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Sheridan_Le_Fanu_002.png')
Author.create(:name => 'Leigh Bardugo', :nationality => 'American Israeli', :dob => '1975-04-06', :image => 'https://assets-us-01.kc-usercontent.com/5cb25086-82d2-4c89-94f0-8450813a0fd3/293c3dbc-5a3a-4eb4-b17f-22ed98914480/leigh-bardugo%20(1).png?fm=png&auto=format')
Author.create(:name => 'Susanna Clarke', :nationality => 'British', :dob => '1959-11-1', :image => 'https://i.guim.co.uk/img/media/40d84be1d1187a3a6ece792ab69774ebb27ed2f4/96_752_5147_3088/master/5147.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=da387dfeee062682a33831648976390e')

puts "#{ Author.count } authors created."
