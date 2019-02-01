class UserDanceClassSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructor_id, :studio_id, :day, :start_time, :end_time, :studio, :instructor

  belongs_to :user
  belongs_to :danceClass
end
