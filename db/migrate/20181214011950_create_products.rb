class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :products, :product_name
    add_index :products, :user_id
    add_index :products, [:user_id, :product_name], unique: true
  end
end
