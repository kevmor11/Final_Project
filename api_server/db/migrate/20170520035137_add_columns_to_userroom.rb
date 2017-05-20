class AddColumnsToUserroom < ActiveRecord::Migration[5.1]
  def change
    add_column :userrooms, :user_id, :integer
    add_column :userrooms, :room_id, :integer
  end
end
