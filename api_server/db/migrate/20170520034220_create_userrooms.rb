class CreateUserrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :userrooms do |t|

      t.timestamps
    end
  end
end
