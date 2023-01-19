class CreateBrands < ActiveRecord::Migration[5.2]
  def change
    create_table :brands do |t|
      t.text :name
      t.text :ceo
      t.text :founder
      t.date :founded
      t.text :headquarters
      t.text :logo
      t.timestamps
    end
  end
end
