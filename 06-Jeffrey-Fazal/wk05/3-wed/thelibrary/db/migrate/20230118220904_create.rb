class Create < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.text :author
      t.text :image_link
      t.text :bio
      t.integer :author_calibre_id
    end
  end
end