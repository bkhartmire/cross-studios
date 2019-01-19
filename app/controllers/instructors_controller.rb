class InstructorsController < ApplicationController
  #you can delete this. we don't fetch this. instead nesting associated instructors json data in dance_class json objects
  def index
    @instructors = Instructor.all.as_json(methods:[:dance_classes])
    render json: @instructors
  end

end
