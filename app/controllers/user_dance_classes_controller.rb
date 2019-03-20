class UserDanceClassesController < ApplicationController

  def create
    user_id = current_user.id
    userDanceClass = UserDanceClass.create(user_id: user_id, dance_class_id: params[:dance_class_id])
    render json: userDanceClass.dance_class
  end

  def destroy
    user = User.find_by_auth_token!(request.headers[:token])
    user_id = user.id
    userDanceClass = UserDanceClass.find_by(user_id: user_id, dance_class_id: params[:id])
    userDanceClass.destroy
    render json: userDanceClass.dance_class
  end

end
