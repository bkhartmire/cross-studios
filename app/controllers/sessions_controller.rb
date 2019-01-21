class SessionsController < ApiController
  skip_before_action :require_login, only: [:create], raise: false
end
