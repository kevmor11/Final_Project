class CreateUserrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :userrooms do |t|
      t.references :room, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
