class VideoChannel < ApplicationCable::Channel
  # default method which is called when a client connects to the channel
  # subscribes the client to listen to changes
  def subscribed
    stream_from "video"
  end
  
  def unsubscribed
  end
  
  #custom action
  def load data
    puts "loading video #{data['video']}"
    ActionCable.server.broadcast("video", data)
  end

  def loaded
  
  end

  def play
    puts "Playing"
  end
end
