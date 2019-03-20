require 'nokogiri'
require 'open-uri'
require 'pry'
require_relative './dance_class.rb'

class DanceClassScraper

  def get_page
    doc = Nokogiri::HTML(open('http://millenniumdancecomplex.com/schedule/'))
  end

  def separate_days
    doc = self.get_page
    monday_data = doc.css(".avia-table-1")
    tuesday_data = doc.css(".avia-table-2")
    wednesday_data = doc.css(".avia-table-3")
    thursday_data = doc.css(".avia-table-4")
    friday_data = doc.css(".avia-table-5")
    saturday_data = doc.css(".avia-table-6")
    sunday_data = doc.css(".avia-table-7")

    days = [monday_data, tuesday_data, wednesday_data, thursday_data, friday_data, saturday_data, sunday_data]
    return days
  end

  def get_day(index)
    if index == 0
      day = "MONDAY"
    elsif index == 1
      day = "TUESDAY"
    elsif index == 2
      day = "WEDNESDAY"
    elsif index == 3
      day = "THURSDAY"
    elsif index == 4
      day = "FRIDAY"
    elsif index == 5
      day = "SATURDAY"
    elsif index == 6
      day = "SUNDAY"
    end
    return day
  end

  def make_dance_classes()
    days = self.separate_days

    days.each_with_index do |day_data, index|
      studio_id = Studio.find_by(name: 'Millennium Dance Complex').id
      day = get_day(index)
      classes = day_data.css('tr')
      #nested enumerator
      classes.each do |dance_class|
        class_data = dance_class.css('td')
        time = class_data[0].text.split('-')
        start_time = time[0]
        end_time = time[1]
        name = class_data[1].text
        instructor_id = Instructor.find_or_create_by(name: class_data[3].text).id
        if (end_time.include? "am") || (end_time.include? "pm")
          DanceClass.find_or_create_by(
            name: name,
            studio_id: studio_id,
            start_time: start_time,
            end_time: end_time,
            day: day,
            instructor_id: instructor_id
          )
        end
      end
    end
  end

end
