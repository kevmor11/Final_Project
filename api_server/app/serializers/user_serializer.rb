class UserSerializer < ApplicationSerializer
  attributes :first_name, :last_name, :gender, :email,
             :avatar, :created_at, :updated_at, :rooms, :posts
end