class DanceClass < ApplicationRecord
  belongs_to :studio
  belongs_to :instructor
end
