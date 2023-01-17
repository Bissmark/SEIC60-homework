Whale.destroy_all

Whale.create :com_name => "Blue Whale", :sci_name => "Balaenoptera musculus", :size => 100, :weight => 200
Whale.create :com_name => "Orca", :sci_name => "Orcinus Orca", :size => 32, :weight => 6

puts "#{ Whale.count } whales created"