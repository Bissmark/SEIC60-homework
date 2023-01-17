Player.destroy_all

Player.create :name => "Rafael Nadal", :birth_country => "Spain", :height => 185.0, :weight => 85.0, :image => "https://ausopen.com/sites/default/files/styles/325x325/public/202301/17/rnadal.png?itok=fBhanq8Z"
Player.create :name => "Casper Ruud", :birth_country => "Norway", :height => 183.0, :weight => 77.0, :image => "https://ausopen.com/sites/default/files/styles/325x325/public/ruud_casper_pp_h.png?itok=bPMlv-EV"
Player.create :name => "Stefanos Tsitsipas", :birth_country => "Greece", :height => 193.0, :weight => 90.0, :image => "https://ausopen.com/sites/default/files/styles/325x325/public/202301/17/stsitsipas.png?itok=M84gEMIb"

puts "Created #{Player.count} new players"