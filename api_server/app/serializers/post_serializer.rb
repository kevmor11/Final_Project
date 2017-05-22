class PostSerializer < ApplicationSerializer
  attributes :id, :room_id, :user_id, :content, :description,
             :seen, :category, :created_at, :updated_at
end