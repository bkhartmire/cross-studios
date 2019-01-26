class ReviewsController < ApplicationController
  def create
    user = User.find_by_auth_token!(request.headers[:token])
    instructor = Instructor.find_by(id: params[:instructor_id])
    review = Review.create(user_id: user.id, instructor_id = instructor.id, text: params[:review])
    render json: review
  end
end
