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

  def self.reformat
    #sunday -> 0; friday -> 5 (today is 2)
    binding.pry
    #wday returns 0-6 integer (Sunday = 0)
    today_index = DateTime.now.wday
    if today_index > self.day_index
      difference = today_index - self.day_index
      class_date = DateTime.now - difference
    elsif today_index < self.day_index
      difference = self.day_index - today_index
      class_date = DateTime.now + difference
    end
    return class_date
  end

end
