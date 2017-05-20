class PostsController < ApplicationController


  def create 
    user = User.find(params[:user_id])
    user.posts.create
  end

end
