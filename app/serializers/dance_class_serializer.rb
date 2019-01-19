class DanceClassSerializer < ActiveModel::Serializer
  attributes :id, :name, :day, :time

  belongs_to :studio
  belongs_to :instructor
end