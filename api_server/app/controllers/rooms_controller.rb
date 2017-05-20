class RoomsController < ApplicationController


  def new
  end

  def create
    room = Room.new
    if room.save
        render json: room, status: 201
    else
        render json: { errors. user.errors.full_messages }, status: 422
    end
  end

end
