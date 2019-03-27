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
      day.sort_by!{|dance_class| DateTime.parse(dance_class.end).strftime("%H:%M:%S")}
    end
    separated_days.flatten
  end

  def reformat
    #.wday returns 0-6 integer (Sunday = 0)
    today_index = Date.today.wday
    difference = today_index - self.day_index
    class_date = Date.today - difference

    start_time = Time.parse(self.start)
    end_time = Time.parse(self.end)
    clone = self.dup
    clone.start = DateTime.new(class_date.year, class_date.month, class_date.day, start_time.hour, start_time.min, start_time.sec, start_time.zone)
    clone.end = DateTime.new(class_date.year, class_date.month, class_date.day, end_time.hour, end_time.min, end_time.sec, end_time.zone)
    #binding.pry
    return clone
  end

end
