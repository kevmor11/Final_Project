class PostChannel < ApplicationCable::Channel

  # default method which is called when a client connects to the channel
  # subscribes the client to listen to changes
  def subscribed
    stream_from "channel_public_post"
  end
  
  def unsubscribed
  end
  
  #custom action
  def speak
    puts "HIIIIIII"
  end
  
end
