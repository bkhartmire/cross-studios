class UserDanceClassSerializer < ActiveModel::Serializer
  attributes :id, :text, :instructor_id, :studio_id, :day, :start, :end, :studio, :instructor

  belongs_to :user
  belongs_to :danceClass
end
