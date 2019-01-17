require 'nokogiri'
require 'open-uri'
require_relative './dance_class.rb'

class DanceClassScraper

  def get_page
    doc = Nokogiri::HTML(open('http://millenniumdancecomplex.com/schedule/'))
  end

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
        name = variables['names'][index].text
        studio_id = Studio.find_by(name: 'Millennium Dance Complex').id
        time = variables['times'][index].text
        instructor_id = Instructor.find_or_create_by(name: variables['instructors'][index].text).id
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

end
