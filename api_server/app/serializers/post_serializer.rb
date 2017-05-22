class PostSerializer < ApplicationSerializer
  attributes :id, :content, :description, :seen, :category, 
             :created_at, :updated_at, :user, :room
end