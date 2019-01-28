class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :instructor_id, :text

  # belongs_to :instructor
  # belongs_to :user
end
