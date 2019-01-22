class DanceClassSerializer < ActiveModel::Serializer
  attributes :id, :name, :day, :time, :instructor_id

  belongs_to :studio
  belongs_to :instructor
  has_many :user_dance_classes
  has_many :users
end
