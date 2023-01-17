Shipwreck.destroy_all
Shipwreck.create :vessel => 'Admiral Colpoys', :year => 1818, :incident_location => 'South Georgia', :country=> 'United Kingdom', :incident_cause => 'Unknown'

Shipwreck.create :vessel => 'Ady Gil', :year => 2011, :incident_location => 'Southern Ocean', :country=> 'New Zealand', :incident_cause => 'Unknown'

Shipwreck.create :vessel => 'Akademik Ioffe', :year => 1999, :incident_location => 'Antarctic Peninsula', :country=> 'Russia', :incident_cause => 'Ice'


# optional
puts "#{ Shipwreck.count } shipwrecks created."