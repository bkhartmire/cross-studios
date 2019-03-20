class FavoritesController < ApplicationController


  def index
    user = User.find_by_auth_token!(request.headers[:token])
    favorites = Favorite.all.select{|favorite| favorite.user_id == user.id}
    render json: favorites
  end

  def create
    user = User.find_by_auth_token!(request.headers[:token])
    user_id = user.id
    instructor = Instructor.find_by(id: params[:instructor_id])

    if instructor.favorites.none?{|fave| fave.user_id == user_id}
      instructor.favorited_count += 1
      instructor.save
    end

    favorite = Favorite.find_or_create_by(user_id: user_id, instructor_id: params[:instructor_id])

    render json: favorite
  end

  def destroy
    instructor = Instructor.find_by(id: params[:instructor_id])
    instructor.favorited_count -= 1
    instructor.save
    favorite = Favorite.find_by(id: params[:favorite_id])
    favorite.destroy
    render json: favorite
  end

end
