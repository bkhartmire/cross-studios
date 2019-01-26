class InstructorSerializer < ActiveModel::Serializer
  attributes :name, :id, :favorited_count, :video_url, :dance_classes, :reviews

  has_many :dance_classes
  has_many :studios
end
