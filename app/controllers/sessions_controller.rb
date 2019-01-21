class SessionsController < ApiController
  skip_before_action :require_login, only: [:create], raise: false

  def create
    if User.validate_login(params[:username], params[:password])
      allow_token_to_be_used_only_once_for(user)
      send_token_for_valid_login_of(user)
    else
      render_unauthorized("Error with your login or password")
    end
  end

  def destroy
    logout
    head :ok
  end

  private

  def allow_token_to_be_used_only_once_for(user)
  end

  def send_token_for_valid_login_of(user)
  end
end
