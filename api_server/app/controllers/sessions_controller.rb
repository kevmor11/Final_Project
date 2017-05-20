class SessionsController < ApplicationController

  def new
  end

  def create
    if user = User.authenticate_with_credentials(params[:email], params[:password])
      render json: user, status: 200
    else
      render json: { errors: ['Invalid e-mail or password.'] }, status: 422 
    end
  end
  
end
