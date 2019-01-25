class FavoritesController < ApplicationController

  def create
    user = User.find_by_auth_token!(request.headers[:token])
    @favorite = Favorite.find_or_create_by(user_id: user.id, instructor_id: params[:instructor_id])
    instructor = Instructor.find_by(params[:instructor_id])
    instructor.favorited_count += 1
    instructor.save
    render json: @favorite
  end

  def destroy
    @favorite = Favorite.find_by(params[:id])
    @favorite.destroy
    render json: @favorite
  end

end
