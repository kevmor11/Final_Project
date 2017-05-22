class PostsController < ApplicationController

  def create 
    room = Room.find(params[:room_id])
    @post = room.posts.create
    @post.user = current_user
  end

  def show 
    @post = Post.find_by(id: params[:id])
    if @post.present? 
      render json: @post, serializer: PostSerializer, status: 201
    else
      render json: { errors: ["Post not found."] }, status: 422
    end
  end

end