class CreateUserDanceClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :users_dance_classes do |t|
      t.integer :user_id
      t.integer :dance_class_id
    end
  end
end
