require 'nokogiri'
require 'open-uri'
require_relative './dance_class.rb'

class DanceClassScraper
  #wrote all this code for Playground website. Unfortunately the schedule is rendered with JS, so cannot use Nokogriri to scrape. For now let's scrape Millenium then figure out if I can scrape JS elements later
  #def get__page
  #  doc = Nokogiri::HTML(open('https://www.playgroundla.dance/schedule/'))
  #end
#
#date is span.hc_date
#  def get_schedule
#    self.get__page.css("tr.schedule_header")
#  end

#  def make_dance_classes
#    self.get_schedule.each do |day_row|
#      date = day_row.css(".hc_date").text
#      row.css("tr").each do |class_row|
#        dance_class = DanceClass.new
#        dance_class.date = date
#        console.log('inside method')
        #there are two inner spans for start time and ending time. Do I need to break this up?
#        dance_class.time = class_row.css(".hc_time").text
#        dance_class.name = class_row.css(".classname").text
#        instructor_name = class_row.css(".trainer").text
#        class_instructor = Instructor.find_or_create_by(name: instructor_name)
#        dance_class.instructor_id = class_instructor.id
#        dance_class.save
#      end
#    end
#  end
  def get__page
    doc = Nokogiri::HTML(open('http://millenniumdancecomplex.com/schedule/'))
  end

  def make_dance_classes
    list = self.get__page.css(".first-table-item")
    dance_class = DanceClass.new
    dance_class.studio_id = Studio.find_by(name: 'Millennium Dance Complex').id
    dance_class.time = list[0].text
    dance_class.name = list[1].text
    instructor = Instructor.find_or_create_by(name: list[3].text)
    dance_class.instructor_id = instructor.id
    dance_class.save
  end

end
