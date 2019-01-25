class FavoritesController < ApplicationController

  def create
    @user = User.find_by_auth_token!(request.headers[:token])
    user_id = @user.id
    @favorite = Favorite.find_or_create_by(user_id: user_id, instructor_id: params[:instructor_id])
    render json: @favorite
  end

  def destroy
    @favorite = Favorite.find_by(params[:id])
    @favorite.destroy
    render json: @favorite
  end

end
