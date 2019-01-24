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
    monday = self.all.select {|dance_class| dance_class.day == "MONDAY"}.sort_by{|dance_class| DateTime.parse(dance_class.end_time).strftime("%H:%M:%S")}
    tuesday = self.all.select {|dance_class| dance_class.day == "TUESDAY"}.sort_by{|dance_class| DateTime.parse(dance_class.end_time).strftime("%H:%M:%S")}
    wednesday = self.all.select {|dance_class| dance_class.day == "WEDNESDAY"}.sort_by{|dance_class| DateTime.parse(dance_class.end_time).strftime("%H:%M:%S")}
    thursday = self.all.select {|dance_class| dance_class.day == "THURSDAY"}.sort_by{|dance_class| DateTime.parse(dance_class.end_time).strftime("%H:%M:%S")}
    friday = self.all.select {|dance_class| dance_class.day == "FRIDAY"}.sort_by{|dance_class| DateTime.parse(dance_class.end_time).strftime("%H:%M:%S")}
    saturday = self.all.select {|dance_class| dance_class.day == "SATURDAY"}.sort_by{|dance_class| DateTime.parse(dance_class.end_time).strftime("%H:%M:%S")}
    sunday = self.all.select {|dance_class| dance_class.day == "SUNDAY"}.sort_by{|dance_class| DateTime.parse(dance_class.end_time).strftime("%H:%M:%S")}
    separated_days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
    separated_days.flatten
  end





end
