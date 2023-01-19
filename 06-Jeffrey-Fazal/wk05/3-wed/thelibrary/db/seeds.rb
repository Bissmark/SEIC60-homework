# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

Book.destroy_all

csv_text = File.read(Rails.root.join('lib', 'seeds', 'books_seed.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Book.new
  t.book_id = row['Book Id']
  t.title = row['Title']
  t.author = row['Author']
  t.isbn = row['ISBN']
  t.avg_rating = row['Average Rating']
  t.publication_year = row['Publication Year']
  t.image_url = row['Image_link']
  t.save
  puts "#{t.book_id}, #{t.title} saved"
end

Author.destroy_all

csv_text_authors = File.read(Rails.root.join('lib', 'seeds', 'authors_seed.csv'))
csv_authors = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv_authors.each do |row|
  t = Author.new
  t.author = row['Author']
  t.image_link = row['image_link']
  t.bio = row['bio']
  t.author_calibre_id = row['Author_calibre_id']
  t.save
  puts "#{t.author}, #{t.author_calibre_id} saved"
end