class Room < ApplicationRecord
  has_many :userrooms
  has_many :users, through: :userrooms
  has_many :posts
  has_many :invites

  validates :name, presence: true
end
