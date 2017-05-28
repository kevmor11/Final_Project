class RoomSerializer < ApplicationSerializer
  attributes :name, :users, :posts, :id

  has_many :userrooms
  has_many :users, through: :userrooms
  has_many :posts

end