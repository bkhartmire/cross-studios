class Studio < ApplicationRecord
  has_one :address
  has_many :dance_classes
  has_many :instructors, through: :dance_classes
end
