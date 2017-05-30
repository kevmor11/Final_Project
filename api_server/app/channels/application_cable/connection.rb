module ApplicationCable
  class Connection < ActionCable::Connection::Base

    identified_by :current_user

    def connect 
      self.current_user = current_user
    end

    # protected
    #   def find_verified_user
    #     if session 
    #       if current_user = User.find_by(id: session[:user_id])
    #         current_user
    #       else 
    #         reject_unauthorized_connection
    #       end
    #     end
    #   end
  end
end
