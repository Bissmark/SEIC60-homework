Mountain.destroy_all

Mountain.create :name => 'Mount Everest', :age => '50 million', :location => "Nepal and Tibet", :elevation => 8849, :routes => "Southeast Ridge"
Mountain.create :name => 'K2', :age => '115 million', :location => "Pakistan and China", :elevation => 8611, :routes => "Abruzzi Spur"
Mountain.create :name => 'Kangchenjunga', :age => '445 million', :location => "Nepal and Sikkim India", :elevation => 8586, :routes => " Northeast Ridge (Nepal)"

puts "#{ Mountain.count } mountains created."
