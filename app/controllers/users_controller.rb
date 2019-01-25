
class UsersController < ApiController
   before_action :require_login, except: [:create]

   def create
     #.create! will return user itself instead of boolean value
     user = User.create!(user_params)
     render json: {token: user.auth_token}
   end

   def profile
     @user = User.find_by_auth_token!(request.headers[:token])
     render json: @user, include: [:favorites, dance_classes: {include: [:studio, :instructor]}]
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
