class UsersController < ApplicationController

  def new
  end

  def index
    @users = User.all
    render json: @users, each_serializer: UserSerializer, status: 201
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
    respond_to do |format|
      format.json { render json: @user }
      format.html { @user }
    end
    # if @user.present?
    #   render json: @user, serializer: UserSerializer, status: 200
    # else
    #   render json: { errors: ["User not found."] }, status: 422
    # end
  end

  def update
    if current_user.update(user_params)
      render json: current_user, serializer: UserSerializer, status: 200
    else
      render json: { errors: current_user.errors.full_messages }, status: 422
    end
  end

  # if User.exists?
    # def me
    #   render json: current_user, serializer: UserSerializer, status: 200
    # end

    def me
      if current_user
        render json: current_user, serializer: UserSerializer, status: 200
      else
        render json: { errors: ["User not found."] }, status: 422
      end
    end

  private

    def user_params
      params.permit(:first_name, :last_name, :gender,
      :email, :password, :password_confirmation, :avatar)
    end


end

  # def me
  #   if current_user
  #     render json: current_user, serializer: UserSerializer, status: 200
  #   else
  #     render :new
  #   end
  # end