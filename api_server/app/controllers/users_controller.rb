class UsersController < ApplicationController

  def new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user, serializer: UserSerializer, status: 201
    else
      render json: { errors: [user.errors.full_messages] }, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user.present?
      render json: @user, serializer: UserSerializer, status: 200
    else
      render json: { errors: ["User not found."] }, status: 422
    end
  end

  def update
    if current_user.update(user_params)
      render json: current_user, serializer: UserSerializer, status: 200
    else
      render json: { errors: current_user.errors.full_messages }, status: 422
    end
  end

  # temp solution, maybe use a namespaced ctrl later
  def posts
    # TODO: do some error checking later
    posts = User.find(params[:user_id]).posts
    render json: posts, status: 200
  end

  private
    def user_params
      params.permit(:first_name, :last_name, :gender,
                     :email, :password, :password_confirmation)
    end


end
