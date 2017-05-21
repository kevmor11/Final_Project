class PostsController < ApplicationController

  def index 
    @posts = Post.order("created_at DESC")
  end
  
  def create 
    user = User.find(params[:user_id])
    user.posts.create
  end

end
