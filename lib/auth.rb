require 'jwt'

class Auth

  ALOGORITHM = 'HS256'

  def self.issue(payload)
    JWT.encode(
      payload,
      auth_secret,
      ALGORITHM
    )
  end

  def self.decode(token)

  end

  def self.auth_secret
    ENV["AUTH_SECRET"]
  end

end
