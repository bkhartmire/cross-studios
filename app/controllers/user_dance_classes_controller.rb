require 'pry'

class UserDanceClassesController < ApplicationController

  def create
    @user = User.find_by_auth_token!(request.headers[:token])
    user_id = @user.id
    @userDanceClass = UserDanceClass.find_or_create_by(user_id: user_id, dance_class_id: params[:dance_class_id])
    render json: @userDanceClass
  end

  def destroy
    @userDanceClass = UserDanceClass.find(params[:id])
    userDanceClass.destroy
    render json: @userDanceClass
  end

end
