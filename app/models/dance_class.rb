require 'pry'
class DanceClass < ApplicationRecord
  belongs_to :studio
  belongs_to :instructor
  has_many :user_dance_classes
  has_many :users, through: :user_dance_classes

  def self.sort_chronologically
    monday = self.all.select {|dance_class| dance_class.day == "MONDAY"}
    tuesday = self.all.select {|dance_class| dance_class.day == "TUESDAY"}
    wednesday = self.all.select {|dance_class| dance_class.day == "WEDNESDAY"}
    thursday = self.all.select {|dance_class| dance_class.day == "THURSDAY"}
    friday = self.all.select {|dance_class| dance_class.day == "FRIDAY"}
    saturday = self.all.select {|dance_class| dance_class.day == "SATURDAY"}
    sunday = self.all.select {|dance_class| dance_class.day == "SUNDAY"}
    separated_days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
    separated_days.each do |day|
      day.sort_by!{|dance_class| DateTime.parse(dance_class.end_time).strftime("%H:%M:%S")}
    end
    separated_days.flatten
  end

  def reformat
    calendar_object = {id: self.id, text: self.text}

    #.wday returns 0-6 integer (Sunday = 0)
    today_index = Date.today.wday
    difference = today_index - self.day_index
    class_date = Date.today - difference

    reformatted_start_time = Time.parse(self.start_time)
    reformatted_end_time = Time.parse(self.end_time)

    calendar_object[:start] = DateTime.new(class_date.year, class_date.month, class_date.day, reformatted_start_time.hour, reformatted_start_time.min, reformatted_start_time.sec, reformatted_start_time.zone)

    calendar_object[:end] = DateTime.new(class_date.year, class_date.month, class_date.day, reformatted_end_time.hour, reformatted_end_time.min, reformatted_end_time.sec, reformatted_end_time.zone)

    return calendar_object
  end

end
