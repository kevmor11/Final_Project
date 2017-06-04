class RoomsController < ApplicationController

  def new
  end

  def index
    @rooms = Room.all
    render json: @rooms, each_serializer: RoomSerializer, status: 201
  end

  def create
    user = current_user
    room = user.rooms.create(room_params)
    userroom = user.userrooms.where(room: room.id).first
    if room.save
      render json: room, serializer: RoomSerializer, status: 201
    else
      render json: { errors: [room.errors.full_messages] }, status: 422
    end
  end

  def show
    @room = Room.find_by(name: params[:id])
    @posts = @room.posts.all
    respond_to do |format|
      format.json { render json: @room }
      format.html {}
    end
  end

  def destroy
    @room = Room.find params[:id]
    @room.destroy
  end

  private
    def room_params
      params.permit(:name)
    end

end