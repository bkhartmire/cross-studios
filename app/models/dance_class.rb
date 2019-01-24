class DanceClass < ApplicationRecord
  belongs_to :studio
  belongs_to :instructor
  has_many :user_dance_classes
  has_many :users, through: :user_dance_classes

  #add instance method to make day capital letter, then all lowercase


  #once sort_by_time method is finished, you can just call this method to be the main sort_chronologically method
  def self.sort_by_day
    monday = self.all.select {|dance_class| dance_class.day == "MONDAY"}
    #.sort_by_time
    tuesday = self.all.select {|dance_class| dance_class.day == "TUESDAY"}
    #.sort_by_time
    wednesday = self.all.select {|dance_class| dance_class.day == "WEDNESDAY"}
      #.sort_by_time
    thursday = self.all.select {|dance_class| dance_class.day == "THURSDAY"}
      #.sort_by_time
    friday = self.all.select {|dance_class| dance_class.day == "FRIDAY"}
      #.sort_by_time
    saturday = self.all.select {|dance_class| dance_class.day == "SATURDAY"}
      #.sort_by_time
    sunday = self.all.select {|dance_class| dance_class.day == "SUNDAY"}
      #.sort_by_time
    separated_days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]

    separated_days.flatten
    #self.sort_by_time(separated_days)
  end
  #sort each group of days
  def self.sort_by_time(single_day_array)
    #this totally won't work but is this the basic idea? figure it out when you get wifi again
    #  use something like this to get in military clock format: DateTime.parse(date).strftime("%H:%M:%S")
    # then .sort
    sorted_dance_classes = single_day_array.sort_by(|a, b| a.start_time - b.start_time)
    return sorted_dance_classes
    end
    #Is there a built in method for this? Will you have to manipulate data to have starting time and ending time?

  end

end
