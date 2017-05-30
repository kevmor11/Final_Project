# app/models/concerns/publishes_updates_to_pusher.rb
require 'active_support/concern'

module PublishesUpdatesToPusher
  extend ActiveSupport::Concern

  included do
    after_commit :notify_via_pusher, on: [:create, :update]

    def notify_via_pusher
      if Sidekiq.server?
        PusherUpdateWorker.new.perform(self.class.name, id)
      else
        PusherUpdateWorker.perform_async(self.class.name, id)
      end
    end
  end
end