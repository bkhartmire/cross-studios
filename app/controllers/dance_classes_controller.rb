class DanceClassesController < ApplicationController
  def new
    DanceClassScraper.new.make_dance_classes
    @classes = DanceClass.all
  end

end
