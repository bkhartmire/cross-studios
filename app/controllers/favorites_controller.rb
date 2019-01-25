class FavoritesController < ApplicationController


  def index
    user = User.find_by_auth_token!(request.headers[:token])
    @favorites = Favorite.all.select{|favorite| favorite.user_id == user.id}
    render json: @favorites
  end

  def create
    user = User.find_by_auth_token!(request.headers[:token])
    instructor = Instructor.find_by(id: params[:instructor_id])
    @favorite = Favorite.find_by(user_id: user.id, instructor_id: params[:instructor_id])
    if !@favorite
      Favorite.create(user_id: user.id, instructor_id: params[:instructor_id])
      instructor.favorited_count += 1
      instructor.save
    end
    render json: @favorite
  end

  def destroy
    @favorite = Favorite.find_by(instructor_id: params[:id])
    @favorite.destroy
    render json: @favorite
  end

end