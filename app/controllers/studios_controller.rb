class StudiosController < ApplicationController

  def index
    studios = Studio.all.as_json(methods:[:address])
    render json: studios
  end

end
