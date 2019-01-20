class InstructorsController < ApplicationController

  def index
    @studios = Studio.all.as_json(methods:[:address])
  end

end
