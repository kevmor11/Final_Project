class RoomsController < ApplicationController

  def new
  end

  def create
    room = Room.new(room_params)
    if room.save
      render json: room, serializer: RoomSerializer, status: 201
    else 
      render json: { errors: [user.errors.full_messages] }, status: 422
    end
  end

  def show 
    @room = Room.find_by(name: params[:id])
    respond_to do |format|
      format.json { render json: @room }
      format.html {}
    end
    # if @room.present?
    #   render json: @room, serializer: RoomSerializer, status: 200
    # else 
    #   render json: { errors: ["Room not found."] }, status: 422 
    # end
  end

  private
    def room_params
      params.permit(:name)
    end


end
