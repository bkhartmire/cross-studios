require 'nokogiri'
require 'open-uri'
require 'pry'
require_relative './dance_class.rb'

class DanceClassScraper

  # def get_page
  #   doc = Nokogiri::HTML(open('http://millenniumdancecomplex.com/schedule/'))
  # end

  # def get_elements(data, day_index)
  #   classes = data.css("tr")
  #   variables = {'times': [], 'names': [], 'instructors': [], 'day': []}
  #   if day_index == 1
  #     variables['times'] = data[0].css("li")
  #     variables['names'] = data[1].css("li")
  #     variables['instructors'] = data[3].css("li")
  #     variables['day'].push("MONDAY")
  #   elsif day_index == 2
  #     variables['times'] = data[4].css("li")
  #     variables['names'] = data[5].css("li")
  #     variables['instructors'] = data[7].css("li")
  #     variables['day'].push("TUESDAY")
  #   elsif day_index == 3
  #     variables['times'] = data[8].css("li")
  #     variables['names'] = data[9].css("li")
  #     variables['instructors'] = data[11].css("li")
  #     variables['day'].push("WEDNESDAY")
  #   elsif day_index == 4
  #     variables['times'] = data[12].css("li")
  #     variables['names'] = data[13].css("li")
  #     variables['instructors'] = data[15].css("li")
  #     variables['day'].push("THURSDAY")
  #   elsif day_index == 5
  #     variables['times'] = data[16].css("li")
  #     variables['names'] = data[17].css("li")
  #     variables['instructors'] = data[19].css("li")
  #     variables['day'].push("FRIDAY")
  #   elsif day_index == 6
  #     variables['times'] = data[20].css("li")
  #     variables['names'] = data[21].css("li")
  #     variables['instructors'] = data[23].css("li")
  #     variables['day'].push("SATURDAY")
  #   elsif day_index == 7
  #     variables['times'] = data[24].css("li")
  #     variables['names'] = data[25].css("li")
  #     variables['instructors'] = data[27].css("li")
  #     variables['day'].push("SUNDAY")
  #   end
  #   return variables
  # end

  def make_dance_classes()
    doc = Nokogiri::HTML(open('http://millenniumdancecomplex.com/schedule/'))

    monday_data = doc.css(".avia-table-1")
    tuesday_data = doc.css(".avia-table-2")
    wednesday_data = doc.css(".avia-table-3")
    thursday_data = doc.css(".avia-table-4")
    friday_data = doc.css(".avia-table-5")
    saturday_data = doc.css(".avia-table-6")
    sunday_data = doc.css(".avia-table-7")

    days = [monday_data, tuesday_data, wednesday_data, thursday_data, friday_data, saturday_data, sunday_data]
    #get the seven days of the week
    days.each_with_index do |day_data, index|
      studio_id = Studio.find_by(name: 'Millennium Dance Complex').id
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
      classes = day_data.css('tr')
      classes.each do |dance_class|
        class_data = dance_class.css('td')
        time = class_data[0].text.split('-')
        start_time = time[0]
        end_time = time[1]
        name = class_data[1].text
        #binding.pry
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
      # until counter == classes.length
  #       name = variables['names'][index].text
  #       studio_id = Studio.find_by(name: 'Millennium Dance Complex').id
  #       time = variables['times'][index].text.split('-')
  #       start_time = time[0]
  #       end_time = time[1]
  #       instructor_id = Instructor.find_or_create_by(name: variables['instructors'][index].text).id
  #       if (end_time.include? "am") || (end_time.include? "pm")
  #         dance_class = DanceClass.find_or_create_by(
  #           name: name,
  #           studio_id: studio_id,
  #           start_time: start_time,
  #           end_time: end_time,
  #           day: day,
  #           instructor_id: instructor_id
  #         )
  #       end
  #       counter += 1
  #     end
  #   end
  # end

# end
