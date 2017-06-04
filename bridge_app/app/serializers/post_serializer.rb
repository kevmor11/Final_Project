class PostSerializer < ApplicationSerializer
  attributes :id, :title, :content, :link, :description, :seen, :category,
             :created_at, :updated_at, :user, :room, :image_file
  belongs_to :room
  belongs_to :user
end