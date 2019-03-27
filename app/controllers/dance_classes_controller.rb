class DanceClassesController < ApplicationController
  def index
    #only scrape from millennium website once. check to see if there are already dance classes created from millennium website.
    classes = DanceClass.sort_chronologically
    render json: classes
  end

  def calendar_index
    #only scrape from millennium website once. check to see if there are already dance classes created from millennium website.
    if DanceClass.all.none?{|dance_class| dance_class.studio_id == Studio.find_by(name: 'Millennium Dance Complex').id}
      DanceClassScraper.new.make_dance_classes
    end
    classes = DanceClass.sort_chronologically
    reformatted_classes = classes.map do |dance_class|
      dance_class.reformat
    end
    render json: reformatted_classes
  end

end
