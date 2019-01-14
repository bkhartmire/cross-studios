class DanceClassesController < ApplicationController
  def index
    puts "HEllo"
    DanceClassScraper.new.make_dance_classes
    @classes = DanceClass.all
  end

end
