class PostsController < ApplicationController
  
  def new
  end

  def create
    @post = Post.new(post_params)
    @post.user = current_user
    @post.room = Room.find params[:room_id]
    if @post.save
      render json: @post
    else
      render json: { errors: ["Post could not be saved."] }, status: 500
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
    @post = Post.find params[:id]
    @room = @post.room
    @post.destroy
  end

  private
    def post_params
      params.require(:post)
      .permit(
        :room_id,
        :user_id,
        :content,
        :title,
        :category,
        :link,
        :description,
        :image_file
      )
    end
    


end