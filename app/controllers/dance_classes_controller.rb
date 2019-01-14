class DanceClassesController < ApplicationController
  def new
    dance_class = Class.new
    url = 'https://www.playgroundla.dance/schedule/'
    doc = Nokogiri::HTML(open(url))
    @data = doc.css('span.hc_date').text 
  end

end
