
# app/workers/pusher_update_worker.rb
class PusherUpdateWorker
  include Sidekiq::Worker

  def perform(klass, id)
    Pusher.encrypted = true
    pusher = Pusher::Client.from_env
    obj = Object.const_get(klass).find(id)
    channel_id = "User-#{obj.user_id}"

    resource_klass = Object.const_get("#{klass}Resource")

    serialized = JSONAPI::ResourceSerializer.new(resource_klass, {
      always_include_to_one_linkage_data: true,
      always_include_to_many_linkage_data: true
    }).serialize_to_hash(resource_klass.new(obj, nil))

    pusher.trigger(channel_id, "objectUpdated", serialized)
  end
end