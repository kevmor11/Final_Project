class VideoChannel < ApplicationCable::Channel
  def subscribed
    stream_from "video"
  end

  def unsubscribed
  end

  def load data
    ActionCable.server.broadcast("video", data)
  end

  def play data
    ActionCable.server.broadcast("video", data)
  end
end
