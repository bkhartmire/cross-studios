class ApplicationController < ActionController::Base
  protect_from_forgery except: :create
  #def get_current_user
  #  jwt_token = request.headers['HTTP_AUTHORIZATION'] # .gsub('Bearer ', '')
#
  #  if jwt_token
  #    user_info = Auth.decode(jwt_token)
  #    user ||= User.find(user_info['user_id'])
  #  end

  #  user
  #end
end
