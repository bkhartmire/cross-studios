class DanceClassesController < ApplicationController
  def new
    puts "HEllo"
    DanceClassScraper.new.make_dance_classes
    @classes = DanceClass.all
  end

end
