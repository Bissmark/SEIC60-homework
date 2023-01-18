class CreateDirectors < ActiveRecord::Migration[5.2]
  def change
    create_table :directors do |t|
      t.string :name
      t.string :dob
      t.string :nationality
      t.string :image
      t.timestamps null: false
    end
  end
end
