json.array! @posts do |post|
  json.id post.id
  json.room_id post.room_id
  json.user_id post.user_id
  json.content post.content
  json.description post.description
  json.seen post.seen
  json.category post.category
  json.created_at post.created_at
  json.updated_at post.updated_at
end

