class PostsController < ApplicationController

  def create 
    @post = Post.new(post_params)
    # @post = room.posts.new
    @post.user = current_user

    room = Room.find params[:room_id]
    if @post.save
      render json: post, serializer: PostSerializer, status: 201
    else
      render json: { errors: ["Post could not be saved."] }, status: 500
    end

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
  
  def destroy 
    @post = Post.find_by(id: params[:id])
    @post.destroy
  end    

  private
    def post_params
      params.permit(
        :room_id,
        :user_id,
        :content,
        :title,
      )
    end

end