class InstructorsController < ApplicationController

  def index
    @instructors = Instructor.all
    render json: @instructors, include: {dance_classes: {include: :studio}}
  end

  def show
    @instructor = Instructor.find(params[:id])
    render json: @instructor, include: {dance_classes: {include: :studio}}
  end

end
