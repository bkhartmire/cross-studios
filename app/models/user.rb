class User < ApplicationRecord
  has_many :dance_classes

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true

  has_secure_password
  has_secure_token :auth_token


end
