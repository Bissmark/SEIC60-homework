class AddArchitectIdToBuildings < ActiveRecord::Migration[5.2]
  def change
    add_column :buildings, :architect_id, :integer
  end
end
