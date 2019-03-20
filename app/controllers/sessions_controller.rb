require 'pry'

class SessionsController < ApplicationController
  # skip_before_action :require_login, only: [:create], raise: false
  #
  # def create
  #   if user = User.validate_login(params[:username], params[:password])
  #     allow_token_to_be_used_only_once_for(user)
  #     send_token_for_valid_login_of(user)
  #   else
  #     render_unauthorized("Error with your login or password")
  #   end
  # end
  #
  # def destroy
  #   logout
  #   head :ok
  # end
  #
  # private
  #
  # def allow_token_to_be_used_only_once_for(user)
  #   user.regenerate_auth_token
  # end
  #
  # def send_token_for_valid_login_of(user)
  #   render json: {token: user.auth_token}
  # end
  #
  # def logout
  #   current_user.invalidate_token
  # end

  skip_before_action :authenticate

   def create
     user = User.find_by(email: auth_params[:email])
     binding.pry
     if user.authenticate(auth_params[:password])
       jwt = Auth.issue({user: user.id})
       render json: {jwt: jwt}
     else
     end
   end

   private
     def auth_params
       params.require(:auth).permit(:email, :password)
     end
end
