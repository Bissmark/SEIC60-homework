Developer.destroy_all

Developer.create(:name => 'Nintendo', :headquarters => 'Kyoto, Japan', :founded_date => '1983', :image => 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:600/h:338/q:75/https://bleedingcool.com/wp-content/uploads/2019/07/nintendo-logo-large-red-white.jpg')
Developer.create(:name => 'Blizzard Entertainment', :headquarters => 'Irvine, United States', :founded_date => '1991', :image => 'https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/af/BlizzardEnt.jpg/revision/latest?cb=20150527232949')
Developer.create(:name => 'Valve', :headquarters => 'Bellevue, United States', :founded_date => ' 1996', :image => 'https://1000logos.net/wp-content/uploads/2020/09/Valve-logo-1024x284.jpg')
Developer.create(:name => 'miHoYo', :headquarters => 'Shanghai, China', :founded_date => '2021', :image => 'https://news.vcgamers.com/wp-content/uploads/2022/02/lambang-mihoyo-1024x573.jpg')

puts "#{ Developer.count } developers created."

Game.destroy_all

Game.create(:name => 'The Legend of Zelda: Breath of the Wild', :release_date => '2017', :image => 'https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg')
Game.create(:name => 'Super Mario Bros.', :release_date => '1985', :image => 'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png')
Game.create(:name => 'StarCraft', :release_date => '1998', :image => 'https://upload.wikimedia.org/wikipedia/en/9/93/StarCraft_box_art.jpg')
Game.create(:name => 'Diablo II', :release_date => '2000', :image => 'https://upload.wikimedia.org/wikipedia/en/d/d5/Diablo_II_Coverart.png')
Game.create(:name => 'World of Warcraft', :release_date => '2004', :image => 'https://www.zilliondesigns.com/blog/wp-content/uploads/Warcraft.jpg')
Game.create(:name => 'Counter-Strike', :release_date => '2000', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Counter-Strike_Box.jpg/220px-Counter-Strike_Box.jpg')
Game.create(:name => 'Portal 2', :release_date => '2011', :image => 'https://assets-prd.ignimgs.com/2021/12/08/portal2-1638924084230.jpg')
Game.create(:name => 'Dota 2', :release_date => '2013', :image => 'https://wallpaper.dog/large/10911509.jpg')
Game.create(:name => 'Honkai Impact', :release_date => '2016', :image => 'https://pbs.twimg.com/media/FOl8BqnVEAc9Oza?format=jpg&name=large')
Game.create(:name => 'Genshin Impact', :release_date => '2020', :image => 'https://1000logos.net/wp-content/uploads/2021/08/Genshin-Impact-Logo.jpg')

puts "#{ Game.count } games created."

