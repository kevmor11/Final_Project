class UserroomsController < ApplicationController

  def create
    userroom = Userroom.new(userroom_params)
    # userroom.user_id = current_user.id
    # userroom.room_id = Room.find params[:room_id]
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
      params.permit(:user_id, :room_id, :userroom)
    end

end