class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.integer :book_id
      t.text :title
      t.text :author
      t.integer :isbn
      t.integer :avg_rating
      t.text :publication_year
      t.text :image_url
    end
  end
end