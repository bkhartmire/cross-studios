class CreateDanceClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :dance_classes do |t|
      t.string :text
      t.integer :instructor_id
      t.integer :studio_id
      t.string :day
      t.string :start
      t.string :end

      t.timestamps
    end
  end
end
