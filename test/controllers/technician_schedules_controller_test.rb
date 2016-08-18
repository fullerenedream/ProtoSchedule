require 'test_helper'

class TechnicianSchedulesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get technician_schedules_index_url
    assert_response :success
  end

  test "should get show" do
    get technician_schedules_show_url
    assert_response :success
  end

  test "should get new" do
    get technician_schedules_new_url
    assert_response :success
  end

  test "should get edit" do
    get technician_schedules_edit_url
    assert_response :success
  end

end
