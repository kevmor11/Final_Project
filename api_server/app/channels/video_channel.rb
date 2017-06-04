class VideoChannel < ApplicationCable::Channel
  # default method which is called when a client connects to the channel
  # subscribes the client to listen to changes
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
