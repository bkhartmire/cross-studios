class DanceClassSerializer < ActiveModel::Serializer
  attributes :id, :text, :day, :start_time, :end_time, :instructor_id, :studio_id, :studio, :instructor

  belongs_to :studio
  belongs_to :instructor
  has_many :user_dance_classes
  has_many :users
end
