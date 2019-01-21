
class UsersController < ApiController
   before_action :require_login, except: [:create]

   def create
     #.create! will return user itself instead of boolean value
     user = User.create!(user_params)
     render json: {token: user.auth_token}
   end

   def profile
     user = User.find_by_auth_token!(request_headers[:token])
     render json: { user: {
       username: user.username,
       firstname: user.firstname,
       lastname: user.lastname
      }}
   end





  # def create
  #   #user = User.create(user_params)
  #
  #   #if user
  #   #  jwt = Auth.encrypt({ user_id: user.id })
  #   #  render json: { jwt: jwt, current: user }
  #   #else
  #   #  render json: { error: 'Failed to Sign Up' }, status: 400
  #   #end
  #   input = User.new(user_params)
  #   if(input.save)
  #     :ok
  #   else
  #     :bad_request
  #   end
  # end
  #
  # def login
  #   user = User.find_by(username: params[:user][:username])
  #
  #   if user && user.authenticate(params[:user][:password])
  #     jwt = Auth.encrypt({ user_id: user.id })
  #     render json: { jwt: jwt, current: user }
  #   else
  #     render json: { error: 'Failed to Log In' }, status: 400
  #   end
  # end
  #
  # def show
  #   render json: get_current_user
  # end
  #
  private

  def user_params
    params.require(:user).permit(
        :username,
        :password,
        :password_confirmation,
        :firstname,
        :lastname
      )
  end
end
