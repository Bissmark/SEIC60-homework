class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.text :name
      t.text :release_date
      t.text :image
      t.timestamps
    end
  end
end
