require 'pry'

class SessionsController < ApplicationController
  skip_before_action :authenticate

   def create
     user = User.find_by(email: auth_params[:email])
     if user.authenticate(auth_params[:password])
       jwt = Auth.issue({user: user.id})
       render json: {jwt: jwt}
     end
   end

   def google_auth
     binding.pry
     access_token = request.env["omniauth.auth"]
     binding.pry

   end

   private
     def auth_params
       params.require(:auth).permit(:email, :password)
     end
end
