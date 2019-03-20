require 'jwt'

class Auth

  def self.issue(payload)
    JWT.encode(
      payload,
      auth_secret,
      'HS256'
    )
  end

  def self.decode(token)
    JWT.decode(token,
    auth_secret,
    true,
    { algorithm: 'HS256' }).first
  end

  def self.auth_secret
    ENV["AUTH_SECRET"]
  end

end
