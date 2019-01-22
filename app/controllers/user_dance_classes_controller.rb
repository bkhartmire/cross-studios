require 'pry'

class UserDanceClassesController < ApplicationController

  def create
    #it can't find the user this way. does it have access to the token?? maybe have to pass in headers. try later
    user_id = User.find_by_auth_token!(request.headers[:token]).id
    binding.pry
    UserDanceClass.create!(user_id: user_id, dance_class_id: params[:dance_class_id])
  end

end
