class PostJob < ApplicationJob
  queue_as :default

  def perform post
    ActionCable.server.broadcast "post", room_id: post.room_id, user_id: post.user_id, content: post.content,
                                         title: post.title, link: post.link, description: post.description,
                                         seen: post.seen, category: post.category, image_file: post.image_file,
                                         created_at: post.created_at, updated_at: post.updated_at
  end
end