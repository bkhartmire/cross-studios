class AddDayIndexToDanceClasses < ActiveRecord::Migration[5.2]
  def change
    add_column :dance_classes, :day_index, :integer
  end
end
