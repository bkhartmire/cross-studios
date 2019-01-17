class InstructorSerializer < ActiveModel::Serializer
  attributes :name, :favorited_count, :video_url

  has_many :dance_classes
end
