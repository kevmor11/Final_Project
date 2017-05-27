class CreateInvites < ActiveRecord::Migration[5.1]
  def change
    create_table :invites do |t|
      t.string :email
      t.boolean :accepted
      t.integer :sender
      t.integer :receiver
      t.references :room, index: true, foreign_key: true
      t.timestamps
    end
    add_foreign_key :invites, :users, column: :sender, primary_key: :id
    add_foreign_key :invites, :users, column: :receiver, primary_key: :id
  end
end
