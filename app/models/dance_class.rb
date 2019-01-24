class DanceClass < ApplicationRecord
  belongs_to :studio
  belongs_to :instructor
  has_many :user_dance_classes
  has_many :users, through: :user_dance_classes

  #add instance method to make day capital letter, then all lowercase

  def self.sort_by_time
    sorted_dance_classes = self.sort_by{|dance_class| DateTime.parse(dance_class.end_time).strftime("%H:%M:%S")}
    return sorted_dance_classes
  end

  def self.sort_chronologically
    monday = self.all.select {|dance_class| dance_class.day == "MONDAY"}
    tuesday = self.all.select {|dance_class| dance_class.day == "TUESDAY"}
    wednesday = self.all.select {|dance_class| dance_class.day == "WEDNESDAY"}
    thursday = self.all.select {|dance_class| dance_class.day == "THURSDAY"}
    friday = self.all.select {|dance_class| dance_class.day == "FRIDAY"}
    saturday = self.all.select {|dance_class| dance_class.day == "SATURDAY"}
    sunday = self.all.select {|dance_class| dance_class.day == "SUNDAY"}
    separated_days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
    sorted_days = separated_days.each do |day|
      day.sort_by{|dance_class| DateTime.parse(dance_class.end_time).strftime("%H:%M:%S")}
    end
    sorted_days.flatten
  end





end
