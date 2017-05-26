class PostsChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'messages'
  end
end
