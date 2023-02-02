class CreateDirectors < ActiveRecord::Migration[5.2]
  def change
    create_table :directors do |t|
      t.text :name
      t.text :nationality
      t.text :genre
      t.text :rating
      t.text :image
      t.timestamps
    end
  end
end
