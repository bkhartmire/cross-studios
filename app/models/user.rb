class User < ApplicationRecord
  has_many :user_dance_classes
  has_many :favorites
  has_many :dance_classes, through: :user_dance_classes


  validates :username, presence: true, uniqueness: true

  has_secure_password
  has_secure_token :auth_token

  def invalidate_token
    self.update_columns(auth_token: nil)
  end

  def self.validate_login(username, password)
    user = find_by(username: username)
    if user && user.authenticate(password)
      user
    end
  end


end
