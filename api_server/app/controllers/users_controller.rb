class UsersController < ApplicationController

  def new
  end

  def create
    user = User.new(user_params)
    if user.save
        session[:user_id] = user.id
        render json: user, status: 201
    else
        render json: { errors. user.errors.full_messages }, status: 422
    end
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end


end
