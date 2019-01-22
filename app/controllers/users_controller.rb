
class UsersController < ApiController
   before_action :require_login, except: [:create]

   def create
     #.create! will return user itself instead of boolean value
     user = User.create!(user_params)
     render json: {token: user.auth_token}
   end

   def profile
     @user = User.find_by_auth_token!(request.headers[:token])
     #render json: { user: {
      # username: user.username,
      # firstname: user.firstname,
    #   lastname: user.lastname,
    #   dance_classes: user.dance_classes
      #}}
      render json: @user, include: {dance_classes: {include: :studio}}
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
