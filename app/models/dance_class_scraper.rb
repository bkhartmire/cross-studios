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

#so far only giving me the Monday classes
  def make_dance_classes
    #first seven h2 elements are days of the week
    #monday
    days = self.get__page.css("h2")
    times = self.get__page.css(".pricing-table")[0].css("li")
    names = self.get__page.css(".pricing-table")[1].css("li")
    instructors = self.get__page.css(".pricing-table")[3].css("li")
    index = 0
    until index == times.length
      name = names[index].text
      day = days[0].text
      studio_id = Studio.find_by(name: 'Millennium Dance Complex').id
      time = times[index].text
      instructor_id = Instructor.find_or_create_by(name: instructors[index].text).id
      dance_class = DanceClass.find_or_create_by(
        name: name,
        studio_id: studio_id,
        time: time,
        day: day,
        instructor_id: instructor_id
      )
      index += 1
    end
  end

end
