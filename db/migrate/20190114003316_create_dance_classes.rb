class CreateDanceClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :dance_classes do |t|
      t.string :name
      t.integer :instructor_id
      t.integer :studio_id
      t.string :day
      t.string :time

      t.timestamps
    end
  end
end
