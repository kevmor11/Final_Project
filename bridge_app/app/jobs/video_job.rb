class VideoJob < ApplicationJob
  queue_as :default

  def perform video
    ActionCable.server.broadcast "#{video}"
  end

end
