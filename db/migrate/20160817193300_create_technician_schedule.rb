class CreateTechnicianSchedule < ActiveRecord::Migration[5.0]
  def change
    create_table :technician_schedules do |t|
      t.integer  :user_id
      t.datetime :sunday_start
      t.datetime :sunday_end
      t.datetime :monday_start
      t.datetime :monday_end
      t.datetime :tuesday_start
      t.datetime :tuesday_end
      t.datetime :wednesday_start
      t.datetime :wednesday_end
      t.datetime :thursday_start
      t.datetime :thursday_end
      t.datetime :friday_start
      t.datetime :friday_end
      t.datetime :saturday_start
      t.datetime :saturday_end
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
