class Room < ApplicationRecord
  has_many :userrooms
  has_many :users, through: :userrooms

  validates :name, presence: true
end
