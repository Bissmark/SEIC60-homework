class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :release_date
      t.float :office_box
      t.text :image
      t.timestamps
    end
  end
end
