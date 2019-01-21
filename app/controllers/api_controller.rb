 class ApiController < ApplicationController
   def require_login
     authenticate_token || render_unauthorized("Access denied")
   end

   def current_user
     @current_user ||= authenticate_token
   end

   protected

   def render_unauthorized(message)
     errors = { errors: [detail: message]}
     render json: errors, status: :unauthorized
   end
end
