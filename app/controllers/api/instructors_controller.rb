class Api::InstructorsController < ApplicationController
  def index
    @instructors = Instructor.all
    render json: @instructors
  end

end
