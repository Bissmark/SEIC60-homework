class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :name
      t.integer :director_id
      t.text :genre
      t.text :rating
      t.text :image
      t.timestamps
    end
  end
end
