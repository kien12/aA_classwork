class SessionsController < ApplicationController
    
    def new 
        render :new 
    end

    def create 
         @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user 
            reset_session_token(@user)
            
        else
            redirect_to cats_url
        end
    end

    def destroy
        log_out
        redirect_to new_sessions_url
    end
end
