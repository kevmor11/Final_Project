class PostSerializer < ApplicationSerializer
  attributes :id, :content, :description, :seen, :category, 
             :created_at, :updated_at, :user, :room
  belongs_to :room
  belongs_to :user
end