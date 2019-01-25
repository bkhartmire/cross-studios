class FavoritesController < ApplicationController

  def create
  end

  def destroy
    @favorite = Favorite.find_by(params[:id])
    @favorite.destroy
    render json: @favorite
  end

end
