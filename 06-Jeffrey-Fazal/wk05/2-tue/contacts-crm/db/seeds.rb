# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Contact.destroy_all

Contact.create :name => 'Jason E Bonilla', :preferred_name => 'Jason', :image => 'https://www.fakepersongenerator.com/Face/male/male20171086030461639.jpg', :company => 'Music Plus', :email => 'noelia.smit0@musicplus.com', :phone => 2123709228

Contact.create :name => 'Beverly A Grant', :preferred_name => 'Bevie', :image => 'https://www.fakepersongenerator.com/Face/female/female20171026324121460.jpg', :company => 'World Radio', :email => 'sandra_oko7@worldradio.com', :phone => 7182003660

Contact.create :name => 'Art J Pisano', :preferred_name => 'Art', :image => 'https://www.fakepersongenerator.com/Face/male/male1085832382691.jpg', :company => 'Super Shops', :email => 'enid2009@gmail.com', :phone =>  3372923841