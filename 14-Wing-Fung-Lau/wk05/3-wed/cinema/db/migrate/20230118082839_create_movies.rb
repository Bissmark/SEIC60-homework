class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :year
      t.string :language
      t.string :genre
      t.string :image
      t.timestamps null: false
    end
  end
end
