class AddImageToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :image, :text
  end
end
