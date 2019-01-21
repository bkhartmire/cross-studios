class DanceClassSerializer < ActiveModel::Serializer
  attributes :id, :name, :day, :time

  belongs_to :studio
  belongs_to :instructor
  has_many :users_dance_classes
  has_many :users
end
