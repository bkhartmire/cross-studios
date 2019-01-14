class DanceClassesController < ApplicationController
  def index
    DanceClassScraper.new.make_dance_classes
    @classes = DanceClass.all
    respond_to do |f|
      f.html {render 'dance_classes/index'}
      f.json {render json: @classes}
    end
  end

end
