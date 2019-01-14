class Studio < ApplicationRecord
  has_one :address
  has_many :dance_classes
end
