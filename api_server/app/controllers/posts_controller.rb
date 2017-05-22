class PostsController < ApplicationController

  def index 
    @posts = Post.order("created_at DESC")
    render json: @posts, each_serializer: PostSerializer
  end
  
  def create 
    room = Room.find(params[:room_id])
    @post = room.posts.create
    @post.user = current_user
  end

end