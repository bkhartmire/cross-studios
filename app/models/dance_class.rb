class DanceClass < ApplicationRecord
  belongs_to :studio
  belongs_to :instructor
  has_many :users_dance_classes
  has_many :users, through: :users_dance_classes

  #add instance method to make day capital letter, then all lowercase


  def self.sort_chronologically
    self.sort_by_day.sort_by_time
  end

  #sort by day
  def self.sort_by_day
    monday = self.all.select {|dance_class| dance_class.day == "MONDAY"}
    tuesday = self.all.select {|dance_class| dance_class.day == "TUESDAY"}
    wednesday = self.all.select {|dance_class| dance_class.day == "WEDNESDAY"}
    thursday = self.all.select {|dance_class| dance_class.day == "THURSDAY"}
    friday = self.all.select {|dance_class| dance_class.day == "FRIDAY"}
    saturday = self.all.select {|dance_class| dance_class.day == "SATURDAY"}
    sunday = self.all.select {|dance_class| dance_class.day == "SUNDAY"}
    separated_days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
    self.sort_by_time(separated_days)
  end
  #sort each group of days
  def self.sort_by_time(separated_days)
    #this totally won't work but is this the basic idea? figure it out when you get wifi again
    sorted_dance_classes = []
    separated_days.each do |a, b|
      day.sort_by(a.time - b.time)
      sorted_dance_classes.push(day)
    end
    #Is there a built in method for this? Will you have to manipulate data to have starting time and ending time?

  end

end
