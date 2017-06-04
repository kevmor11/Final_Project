class UserroomsController < ApplicationController

  def index
    @userrooms = Userroom.all
    render json: @userrooms, each_serializer: UserroomSerializer, status: 201
  end

  def create
    userroom = Userroom.new(userroom_params)
    if userroom.save
      render json: userroom.room, serializer: RoomSerializer, status: 201
    else
      render json: { errors: [userroom.errors.full_messages] }, status: 422
    end
  end

  def show

  end

  def destroy
  end

  private
    def userroom_params
      params.permit(:user_id, :room_id)
    end

end