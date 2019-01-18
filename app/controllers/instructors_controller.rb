class InstructorsController < ApplicationController
  def index
    @instructors = Instructor.all.as_json(methods:[:dance_classes])
    render json: @instructors
  end

end
