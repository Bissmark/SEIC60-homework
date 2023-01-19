class CreatePoets < ActiveRecord::Migration[5.2]
  def change
    create_table :poets do |t|
      t.text :name, null: false
      t.date :dob, null: true
      t.text :nationality, null: true
      t.text :image, null:true
      t.text :pen_name, null:true
      t.timestamp null: false
    end
  end
end
