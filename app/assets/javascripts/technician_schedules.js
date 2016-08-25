// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


/*
  jQuery document ready
*/

$(document).ready(function()
{
  /*
    date store today date.
    d store today date.
    m store current month.
    y store current year.
  */
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();



  //return alert($('#technician_schedules').data('technician_schedules'));
  console.log(gon.technician_schedules);
  var allSchedules = gon.technician_schedules;
  console.log(allSchedules[0]);
  var schedule0 = allSchedules[0];
  console.log(schedule0["monday_start"]);
  // console.log(gon.technician_schedules[0]);

  function getCurrentSchedule(user_id) {
    // this needs to be changed to make sure it only grabs the most recent schedule
    var currentSchedule = gon.technician_schedules[user_id];
    var scheduleObject = {
      user_id: currentSchedule.user_id,
      sunday_start: currentSchedule.sunday_start,
      sunday_end: currentSchedule.sunday_end,
      monday_start: currentSchedule.monday_start,
      monday_end: currentSchedule.monday_end,
      tuesday_start: currentSchedule.tuesday_start,
      tuesday_end: currentSchedule.tuesday_end,
      wednesday_start: currentSchedule.wednesday_start,
      wednesday_end: currentSchedule.wednesday_end,
      thursday_start: currentSchedule.thursday_start,
      thursday_end: currentSchedule.thursday_end,
      friday_start: currentSchedule.friday_start,
      friday_end: currentSchedule.friday_end,
      saturday_start: currentSchedule.saturday_start,
      saturday_end: currentSchedule.saturday_end
    }
    console.log("currentSchedule:")
    console.log(scheduleObject);
    return scheduleObject;
  }

  schedule0 = getCurrentSchedule(0);

  var currentScheduleEvent = [
    {
      id: schedule0.user_id,
      title: schedule0.user_id,
      start: schedule0.monday_start,
      end: schedule0.monday_end,
      dow: [1]
    }
  ];
  console.log('currentScheduleEvent 0: mondays')
  console.log(currentScheduleEvent);

  var testEvent = [
    {
      title:'Business Hours',
      start: '9:00', // a start time (9am in this example)
      end: '18:00', // an end time (6pm in this example)
      dow: [1, 2, 3, 4, 5], // Repeat Monday-Friday
      rendering: 'inverse-background' // anything outside these hours is colored as 'background'
    },
    {
      title: "Pat's Hours",
      start: '9:00',
      end: '18:00',
      dow: [1, 2, 3, 4, 5]
    },
    {
      id: 'kim',
      title: "Kim's Hours",
      start: '11:00',
      end: '18:00',
      dow: [1, 2, 3, 4],
      color: '#533A7B'
    },
    {
      id: 'kim',
      title: "Kim's Hours",
      start: '9:00',
      end: '14:00',
      dow: [5],
      color: '#533A7B'
    },
    {
      title: "Sam's Hours",
      start: '9:00',
      end: '16:00',
      dow: [1, 2, 3, 4, 5],
      color: '#E05263'
    }
  ];




  /*
    Initialize fullCalendar and store into variable.
    Why in variable?
    Because doing so we can use it inside other function.
    In order to modify its option later.
  */

  var calendar = $('#calendar').fullCalendar(
  {
    /*
      header option will define our calendar header.
      left define what will be at left position in calendar
      center define what will be at center position in calendar
      right define what will be at right position in calendar
    */
    header:
    {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    /*
      defaultView option used to define which view to show by default,
      for example we have used agendaWeek.
    */
    defaultView: 'agendaWeek',
    /*
      selectable:true will enable user to select datetime slot
      selectHelper will add helpers for selectable.
    */
    selectable: true,
    selectHelper: true,
    /*
      when user select timeslot this option code will execute.
      It has three arguments. Start,end and allDay.
      Start means starting time of event.
      End means ending time of event.
      allDay means if events is for entire day or not.
    */
    select: function(start, end, allDay)
    {
      /*
        after selection user will be promted for enter title for event.
      */
      var title = prompt('Event Title:');
      /*
        if title is entered calendar will add title and event into fullCalendar.
      */
      if (title)
      {
        calendar.fullCalendar('renderEvent',
          {
            title: title,
            start: start,
            end: end,
            allDay: allDay
          },
          true // make the event "stick"
        );
      }
      calendar.fullCalendar('unselect');
    },
    /*
      editable: true - allows user to edit events.
    */
    editable: true,
    /*
      events is the main option for calendar.
      for demo we have added predefined events in json object.
    */

    events: testEvent
    // events: currentScheduleEvent



    // events: [
    //   {
    //     title:'Business Hours',
    //     start: '9:00', // a start time (9am in this example)
    //     end: '18:00', // an end time (6pm in this example)
    //     dow: [1, 2, 3, 4, 5], // Repeat Monday-Friday
    //     rendering: 'inverse-background' // anything outside these hours is colored as 'background'
    //   },
    //   {
    //     title: "Pat's Hours",
    //     start: '9:00',
    //     end: '18:00',
    //     dow: [1, 2, 3, 4, 5]
    //   },
    //   {
    //     id: 'kim',
    //     title: "Kim's Hours",
    //     start: '11:00',
    //     end: '18:00',
    //     dow: [1, 2, 3, 4],
    //     color: '#533A7B'
    //   },
    //   {
    //     id: 'kim',
    //     title: "Kim's Hours",
    //     start: '9:00',
    //     end: '14:00',
    //     dow: [5],
    //     color: '#533A7B'
    //   },
    //   {
    //     title: "Sam's Hours",
    //     start: '9:00',
    //     end: '16:00',
    //     dow: [1, 2, 3, 4, 5],
    //     color: '#E05263'
    //   }
    // ]
  });

});

