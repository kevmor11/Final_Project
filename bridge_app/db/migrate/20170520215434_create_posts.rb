class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.integer :room_id
      t.integer :user_id
      t.string :content
      t.string :title
      t.string :link
      t.text :description
      t.boolean :seen
      t.string :category
      t.string :image_file

      t.timestamps
    end
  end
end
