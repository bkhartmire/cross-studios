require 'nokogiri'
require 'open-uri'

class DanceClassScraper
  #for now only using playground webpage
  def get__page
    doc = Nokogiri::HTML(open('https://www.playgroundla.dance/schedule/'))
  end

#date is span.hc_date
  def get_schedule
    self.get__page.css("tr.schedule_header")
  end

  def make_dance_classes
    self.get_schedule.each do |day_row|
      date = day_row.css("span.hc_date").text
      row.css("tr").each do |class_row|
        dance_class = DanceClass.new
        dance_class.date = date
        console.log('inside method')
        #there are two inner spans for start time and ending time. Do I need to break this up?
        dance_class.time = class_row.css("span.hc_time").text
        dance_class.name = class_row.css("span.classname").text
        instructor_name = class_row.css("span.trainer").text
        class_instructor = Instructor.find_or_create_by(name: instructor_name)
        dance_class.instructor_id = class_instructor.id
        dance_class.save
      end
    end
  end

end
