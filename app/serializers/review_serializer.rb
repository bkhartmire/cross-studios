class ReviewSerializer < ActiveModel::Serializer
  attributes :instructor_id, :user_id, :text

  belongs_to :instructor
  belongs_to :user
end
