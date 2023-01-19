Brand.destroy_all

b1 = Brand.create(:name => "Sennheiser", :ceo => "Daniel Sennheiser", :founder => "Fritz Sennheiser", :founded => "1945-06-01", :headquarters => "Germany", :logo => "https://cdn.worldvectorlogo.com/logos/sennheiser-3.svg")
b2 = Brand.create(:name => "Audio-Technica", :ceo => "Kazuo Matsushita", :founder => "Hideo Matsushita", :founded => "1962-04-17", :headquarters => "Japan", :logo => "https://www.audio-technica.com/en-us/media/logo/default/logo.png")
b3 = Brand.create(:name => "Shure", :ceo => "Christine Schyvinck", :founder => "Sidney N. Shure", :founded => "1925-04-25", :headquarters => "United States", :logo => "https://womensaudiomission.org/wp-content/uploads/2020/06/Shure-Logo-01.jpg")

puts "#{ Brand.count } brands created."


Headphone.destroy_all

h1 = Headphone.create(:name => "HD 650", :price => "599", :weight => "260", :frequency => "10 - 41000", :impedance => "300", :image => "https://www.minidisc.com.au/media/catalog/product/cache/2367887d465b07e2ff46317f6efebebe/8/1/81bokzzcsfl._ac_sl1500_.jpg")
h2 = Headphone.create(:name => "ATH-M50x", :price => "229", :weight => "285", :frequency => "15 - 28000", :impedance => "38", :image => "https://www.minidisc.com.au/media/catalog/product/cache/2367887d465b07e2ff46317f6efebebe/a/t/ath_m50x_2-full_1.jpg")
h3 = Headphone.create(:name => "SRH1840", :price => "799", :weight => "268", :frequency => "10 - 30000", :impedance => "65", :image => "https://www.minidisc.com.au/media/catalog/product/cache/2367887d465b07e2ff46317f6efebebe/s/r/srh1840.jpg")

puts "#{ Headphone.count } headphones created."


b1.headphones << h1
b2.headphones << h2
b3.headphones << h3
