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
     # refresh token???
     #if existing user created account before with their gmail, they can connect their google account
     user = User.find_or_create_by(email: params[:email]) do |u|
       u.firstname = params[:firstname]
       u.lastname = params[:lastname]
       u.google_token = params[:google_token]
       u.password = SecureRandom.urlsafe_base64(n=6)
     end
     jwt = Auth.issue({user: user.id})
     render json: {jwt: jwt}
   end

   private
     def auth_params
       params.require(:auth).permit(:email, :password)
     end
end
