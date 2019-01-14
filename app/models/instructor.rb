class Instructor < ApplicationRecord
  has_many :dance_classes
  validates :name, uniqueness: {case_sensitive: false}
end
