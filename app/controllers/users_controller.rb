
class UsersController < ApplicationController
   # before_action :require_login, except: [:create]

   def create
     # user = User.create!(user_params)
     # render json: {token: user.auth_token}
   end

   def profile
     # user = User.find_by_auth_token!(request.headers[:token])
     # render json: user, include: [favorites: {include: :instructor}, dance_classes: {include: [:studio, :instructor]}, reviews: {include: [:instructor]}]
   end


  private

  def user_params
    params.require(:user).permit(
        :username,
        :password,
        :firstname,
        :lastname
      )
  end
end
