class DanceClass < ApplicationRecord
  belongs_to :studio
  belongs_to :instructor

  #add instance method to make day capital letter, then all lowercase


  def self.sort_chronologically
    self.sort_by_day.sort_by_time
  end

  #sort by day
  def self.sort_by_day
  end
  #sort each group of days
  def self.sort_by_time
  end

end
