class RoomsController < ApplicationController


  def new
    @room = Room.new
  end

  def create
    @room = Room.new(room_params)
    if @room.save
      redirect_to [:rooms]
    else 
      redirect_to "/"
    end
  end

  def index 
    @rooms = Room.order("created_at DESC")
    render json: @rooms, each_serializer: RoomSerializer
  end
  
  

  def show 
    @room = Room.find(params[:id])
    @posts = @room.posts.order(created_at: :desc) 
  end

  private
    def room_params
      params.permit(:name)
    end


end
