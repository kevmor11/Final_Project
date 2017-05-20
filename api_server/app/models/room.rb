class Room < ApplicationRecord
  has_many :userrooms
  has_many :users, through: :userrooms
end
