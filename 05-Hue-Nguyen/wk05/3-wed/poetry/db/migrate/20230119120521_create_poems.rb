class CreatePoems < ActiveRecord::Migration[5.2]
  def change
    create_table :poems do |t|
      t.text :name
      t.text :genre
      t.text :original
      t.text :translation
      t.integer :poet_id
      t.timestamp null: false
    end
  end
end
