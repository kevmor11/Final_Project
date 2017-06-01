class VideoJob < ApplicationJob
  queue_as :default

  def perform video
    puts "IN VIDEO JOB"
    ActionCable.server.broadcast "#{video}"
  end

end
