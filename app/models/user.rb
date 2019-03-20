class User < ApplicationRecord
  has_many :reviews
  has_many :user_dance_classes
  has_many :favorites
  has_many :dance_classes, through: :user_dance_classes


  validates :email, presence: true, uniqueness: true

  has_secure_password

end
