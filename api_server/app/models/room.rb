class Room < ApplicationRecord
  has_many :userrooms, dependent: :destroy
  has_many :users, through: :userrooms
  has_many :posts

  validates :name, 
            presence: true,
            uniqueness: true
end
