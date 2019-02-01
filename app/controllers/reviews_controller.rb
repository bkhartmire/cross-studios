class ReviewsController < ApplicationController

  def create
    user = User.find_by_auth_token!(request.headers[:token])
    instructor = Instructor.find_by(id: params[:instructor_id])
    # review = Review.find_or_create_by(user_id: user.id, instructor_id: instructor.id)
    # review.text = params[:review]
    # review.save
    #   #json: { review: @review, duplicate: dup }
    existing_review = Review.find_by(user_id: user.id, instructor_id: instructor.id)
    if !!existing_review
      user_already_reviewed = existing_review
    else
      user_already_reviewed = false
    end
    review = Review.create(user_id: user.id, instructor_id: instructor.id, text: params[:review])
    render json: {review: review, duplicate: user_already_reviewed}
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    render json: review
  end

end
