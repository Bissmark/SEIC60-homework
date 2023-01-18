class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :title
      t.date :year
      t.integer :actor_id
      t.text :director
      t.text :genre
      t.timestamp

    end
  end
end
