-delete user migrations/model?
User Model relations:   
  has_many :reviews
  has_many :user_dance_classes
  has_many :favorites
  has_many :dance_classes, through: :user_dance_classes
  
