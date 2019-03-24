class UsersController < ApplicationController
  skip_before_action :authenticate, only: [:create]

   def create
     user = User.create!(user_params)
     if user.authenticate(user.password)
       jwt = Auth.issue({user: user.id})
       render json: {jwt: jwt}
     end
   end

   def profile
     user = current_user
     render json: user, include: [favorites: {include: :instructor}, dance_classes: {include: [:studio, :instructor]}, reviews: {include: [:instructor]}]
   end


  private

  def user_params
    params.require(:user).permit(
        :email,
        :password,
        :firstname,
        :lastname
      )
  end
end
