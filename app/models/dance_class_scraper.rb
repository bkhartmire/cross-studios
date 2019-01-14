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
  def get_page
    doc = Nokogiri::HTML(open('http://millenniumdancecomplex.com/schedule/'))
  end

#so far only giving me the Monday classes
  def get_elements(day)
    data = self.get_page.css(".pricing-table")
    variables = {'times': [], 'names': [], 'instructors': []}
    if day == "MONDAY"
      variables['times'] = data[0].css("li")
      variables['names'] = data[1].css("li")
      variables['instructors'] = data[3].css("li")
    elsif day == "TUESDAY"
      variables['times'] = data[4].css("li")
      variables['names'] = data[5].css("li")
      variables['instructors'] = data[7].css("li")
    elsif day == "WEDNESDAY"
      variables['times'] = data[8].css("li")
      variables['names'] = data[9].css("li")
      variables['instructors'] = data[11].css("li")
    elsif day == "THURSDAY"
      variables['times'] = data[12].css("li")
      variables['names'] = data[13].css("li")
      variables['instructors'] = data[15].css("li")
    elsif day == "FRIDAY"
      variables['times'] = data[16].css("li")
      variables['names'] = data[17].css("li")
      variables['instructors'] = data[19].css("li")
    elsif day == "SATURDAY"
      variables['times'] = data[20].css("li")
      variables['names'] = data[21].css("li")
      variables['instructors'] = data[23].css("li")
    elsif day == "SUNDAY"
      variables['times'] = data[24].css("li")
      variables['names'] = data[25].css("li")
      variables['instructors'] = data[27].css("li")
    end
    return variables
  end

  def make_dance_classes()
    #get the seven days of the week
    days = self.get_page.css("h2").slice(0, 7).map{|day| day.text }
    days.each do |day|
      variables = self.get_elements(day)
      index = 0
      until index == variables['times'].length
        name = variables[names][index].text
        studio_id = Studio.find_by(name: 'Millennium Dance Complex').id
        time = variables[times][index].text
        instructor_id = Instructor.find_or_create_by(name: variables[instructors][index].text).id
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
    #times = self.get_page.css(".pricing-table")[0].css("li")
    #names = self.get_page.css(".pricing-table")[1].css("li")
    #instructors = self.get_page.css(".pricing-table")[3].css("li")

  end

end
