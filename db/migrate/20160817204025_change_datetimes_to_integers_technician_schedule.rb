class ChangeDatetimesToIntegersTechnicianSchedule < ActiveRecord::Migration[5.0]
  def change
    change_column :technician_schedules, :sunday_start, :integer
    change_column :technician_schedules, :sunday_end, :integer
    change_column :technician_schedules, :monday_start, :integer
    change_column :technician_schedules, :monday_end, :integer
    change_column :technician_schedules, :tuesday_start, :integer
    change_column :technician_schedules, :tuesday_end, :integer
    change_column :technician_schedules, :wednesday_start, :integer
    change_column :technician_schedules, :wednesday_end, :integer
    change_column :technician_schedules, :thursday_start, :integer
    change_column :technician_schedules, :thursday_end, :integer
    change_column :technician_schedules, :friday_start, :integer
    change_column :technician_schedules, :friday_end, :integer
    change_column :technician_schedules, :saturday_start, :integer
    change_column :technician_schedules, :saturday_end, :integer
  end
end
