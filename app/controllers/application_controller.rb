class ApplicationController < ActionController::API


  private
    def token
      request.env["HTTP_AUTHORIZATION"].scan(/Bearer
        (.*)$/).flatten.last
    end
    def auth
      Auth.decode(token)
    end
    def auth_present?
      !!request.env.fetch("HTTP_AUTHORIZATION",
        "").scan(/Bearer/).flatten.first
    end
end
