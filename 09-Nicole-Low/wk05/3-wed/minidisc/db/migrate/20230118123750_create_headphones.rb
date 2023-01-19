class CreateHeadphones < ActiveRecord::Migration[5.2]
  def change
    create_table :headphones do |t|
      t.text :name
      t.float :price
      t.float :weight
      t.text :frequency
      t.integer :impedance
      t.text :image
      t.integer :brand_id
      t.timestamps
    end
  end
end
