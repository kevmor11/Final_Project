class PostJob < ApplicationJob
  queue_as :default

  def perform(post)
    ActionCable.server.broadcast "channel_public_post", title: post.title, link: post.link, description: post.description
  end
end
