class CreateInstructors < ActiveRecord::Migration[5.2]
  def change
    create_table :instructors do |t|
      t.string :name
      t.integer :favorited_count, default: 0
      t.string :video_url, default: nil

      t.timestamps
    end
  end
end
