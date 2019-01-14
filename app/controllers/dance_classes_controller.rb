class DanceClassesController < ApplicationController
  def index
    DanceClassScraper.new.make_dance_classes
    @classes = DanceClass.all
  end

end
