class UserSerializer < ApplicationSerializer
  attributes :first_name, :last_name, :gender, :email, :id,
             :avatar, :created_at, :updated_at, :rooms, :posts

  has_many :userrooms
  has_many :rooms, through: :userrooms
  has_many :posts

end