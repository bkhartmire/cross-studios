class StudioSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :dance_classes
  has_many :instructors
end
