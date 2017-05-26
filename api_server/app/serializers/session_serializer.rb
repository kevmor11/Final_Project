class SessionSerializer < ApplicationSerializer
  attributes :id, :first_name, :last_name, :gender, :email,
             :avatar, :created_at, :updated_at, :rooms, :posts
  
  has_many :userrooms
  has_many :rooms, through: :userrooms
  has_many :posts
end