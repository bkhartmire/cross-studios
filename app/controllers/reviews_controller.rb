class ReviewsController < ApplicationController

  def create
    user = current_user
    instructor = Instructor.find_by(id: params[:instructor_id])
    existing_review = Review.find_by(user_id: user.id, instructor_id: instructor.id)
    if !!existing_review
      user_already_reviewed = true
      existing_review.update(text: params[:review])
      review = existing_review
    else
      user_already_reviewed = false
      review = Review.create(user_id: user.id, instructor_id: instructor.id, text: params[:review])
    end
    render json: {review: review, duplicate: user_already_reviewed}
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    render json: review
  end

end
