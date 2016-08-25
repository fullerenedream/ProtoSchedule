class TechnicianSchedule < ApplicationRecord
  validates :user_id, presence: true

  # def getSchedule(user_id)
  #   schedule = TechnicianSchedule.find(user_id)

  #   schedule_hash = {
  #       sunday_start: schedule.sunday_start,
  #       sunday_end: schedule.sunday_end,
  #       monday_start: schedule.monday_start,
  #       monday_end: schedule.monday_end,
  #       tuesday_start: schedule.tuesday_start,
  #       tuesday_end: schedule.tuesday_end,
  #       wednesday_start: schedule.wednesday_start,
  #       wednesday_end: schedule.wednesday_end,
  #       thursday_start: schedule.thursday_start,
  #       thursday_end: schedule.thursday_end,
  #       friday_start: schedule.friday_start,
  #       friday_end: schedule.friday_end,
  #       saturday_start: schedule.saturday_start,
  #       saturday_end: schedule.saturday_end
  #     }

  # end

end
