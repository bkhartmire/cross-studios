require 'pry'

class UserDanceClassesController < ApplicationController

  def create
    user_id = User.find_by_auth_token!(request.headers[:token]).id
    UserDanceClass.create!(user_id: user_id, dance_class_id: params[:dance_class_id])
  end

end
