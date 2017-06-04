class UserroomSerializer < ApplicationSerializer
  attributes :user_id, :room_id, :id

  belongs_to :user
  belongs_to :room

end