class TechnicianSchedulesController < ApplicationController

  def index
    # index method as it was before adding gon gem:
    @technician_schedules = TechnicianSchedule.all

    # gon gem passes data to js files
    gon.technician_schedules = TechnicianSchedule.all
  end

  def show
    @technician_schedule = TechnicianSchedule.find(params[:id])
  end

  def new
    @technician_schedule = TechnicianSchedule.new
  end

  def edit
    @technician_schedule = TechnicianSchedule.find(params[:id])
  end

  def create
    @technician_schedule = TechnicianSchedule.new(technician_schedule_params)

    if @technician_schedule.save
      redirect_to technician_schedules_path
    else
      render :new
    end
  end

  def update
    @technician_schedule = TechnicianSchedule.find(params[:id])

    if @technician_schedule.update_attributes(technician_schedule_params)
      redirect_to technician_schedule_path(@technician_schedule)
    else
      render :edit
    end
  end

  def destroy
    @technician_schedule = TechnicianSchedule.find(params[:id])
    @technician_schedule.destroy
    redirect_to technician_schedules_path
  end


  protected

  def technician_schedule_params
    params.require(:technician_schedule).permit(
      :user_id, :sunday_start, :sunday_end, :monday_start, :monday_end, :tuesday_start, :tuesday_end, :wednesday_start, :wednesday_end, :thursday_start, :thursday_end, :friday_start, :friday_end, :saturday_start, :saturday_end
      )
  end


end

