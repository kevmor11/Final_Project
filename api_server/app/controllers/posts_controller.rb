class PostsController < ApplicationController

  def create 
    room = Room.find(params[:room_id])
    @post = room.posts.create
    @post.user = current_user
    if @post.save
      ActionCable.server.broadcast 'posts',
        title: post.title,
        description: post.description,
        user: post.user.first_name
      head :ok
    end       
  end

  def show 
    @post = Post.find_by(id: params[:id])
    if @post.present? 
      render json: @post, serializer: PostSerializer, status: 200
    else
      render json: { errors: ["Post not found."] }, status: 422
    end
  end

end