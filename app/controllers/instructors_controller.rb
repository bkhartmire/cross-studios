class InstructorsController < ApplicationController

  def index
    @instructors = Instructor.all
    render json: @instructors
  end

  def show
    @instructor = Instructor.find(params[:id])
    render json: @instructor
  end

end
