// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function()
{
  // make sure epochTime is in Local Time
  // e.g. epoch time 61200 = Thu Jan 01 1970 09:00:00 GMT-0800 (PST)
  // do not input epoch time in UTC/GMT
  // epochconverter.com is useful
  function epochToDate(epochTime) {
    // new Date() takes milliseconds, but our epochTime in seconds, so multiply by 1000
    return new Date(epochTime*1000);
  }
  //console.log('try epochToDate on epoch time 61200 = 1 Jan 1970, 9:00 AM Local Time');
  var ohNineHundred1970 = epochToDate(61200);
  //console.log('ohNineHundred1970: ' + ohNineHundred1970);

  function dateToHoursAndMinutes(date) {
    var hours = date.getHours();
    hoursString = String(hours);
    //console.log('hoursString:' + hoursString);
    var minutes;
    var minutesString;
    if (date.getMinutes().toString().length === 2) {
      minutes = date.getMinutes();
      minutesString = String(date.getMinutes());
      //console.log('minutesString:' + minutesString);
    }
    else if (date.getMinutes().toString().length === 1){
      minutesString = String('0') + String(date.getMinutes());
      //console.log('minutesString:' + minutesString);
      minutes = parseInt(minutesString, 10);
      //console.log('minutes:' + minutes);
    }
    else {
      alert('Error: date.getMinutes().length is not 1 or 2');
    }
    var hoursAndMinutesString = hoursString + ':' + minutesString;
    //console.log('hoursAndMinutesString: ' + hoursAndMinutesString);
    return hoursAndMinutesString;
  }
  var ohNineHundred = dateToHoursAndMinutes(ohNineHundred1970);
  //console.log('ohNineHundred: ' + ohNineHundred);

  var currentLocalTime = epochToDate(1472152320);
  //console.log('currentLocalTime: ' + currentLocalTime);
  var currentLocalHoursAndMinutes = dateToHoursAndMinutes(currentLocalTime);
  //console.log('currentLocalHoursAndMinutes: ' + currentLocalHoursAndMinutes);

  function epochToHoursAndMinutes(epochTime) {
    var date = epochToDate(epochTime);
    var hoursAndMinutes = dateToHoursAndMinutes(date);
    return hoursAndMinutes;
  }
  // console.log('9:00 epochToHoursAndMinutes(61200): ' + epochToHoursAndMinutes(61200));
  // console.log('12:59 epochToHoursAndMinutes(75540): ' + epochToHoursAndMinutes(75540));
  // console.log('23:59 epochToHoursAndMinutes(115140): ' + epochToHoursAndMinutes(115140));
  // console.log('0:00 epochToHoursAndMinutes(28800): ' + epochToHoursAndMinutes(28800));
  // console.log('0:01 epochToHoursAndMinutes(115260): ' + epochToHoursAndMinutes(115260));
  // console.log('0:00 GMT epochToHoursAndMinutes(0): ' + epochToHoursAndMinutes(0));


  //console.log(gon.technician_schedules);
  var allSchedules = gon.technician_schedules;
  //console.log(allSchedules[0]);
  var schedule0 = allSchedules[0];
  //console.log(schedule0["monday_start"]);
  // console.log(gon.technician_schedules[0]);

  function getCurrentSchedule(user_id) {
    // this needs to be changed to make sure it only grabs the user's most recent schedule
    var currentSchedule = gon.technician_schedules[user_id];
    var scheduleObject = {
      user_id: currentSchedule.user_id,
      sunday_start: epochToHoursAndMinutes(currentSchedule.sunday_start),
      sunday_end: epochToHoursAndMinutes(currentSchedule.sunday_end),
      monday_start: epochToHoursAndMinutes(currentSchedule.monday_start),
      monday_end: epochToHoursAndMinutes(currentSchedule.monday_end),
      tuesday_start: epochToHoursAndMinutes(currentSchedule.tuesday_start),
      tuesday_end: epochToHoursAndMinutes(currentSchedule.tuesday_end),
      wednesday_start: epochToHoursAndMinutes(currentSchedule.wednesday_start),
      wednesday_end: epochToHoursAndMinutes(currentSchedule.wednesday_end),
      thursday_start: epochToHoursAndMinutes(currentSchedule.thursday_start),
      thursday_end: epochToHoursAndMinutes(currentSchedule.thursday_end),
      friday_start: epochToHoursAndMinutes(currentSchedule.friday_start),
      friday_end: epochToHoursAndMinutes(currentSchedule.friday_end),
      saturday_start: epochToHoursAndMinutes(currentSchedule.saturday_start),
      saturday_end: epochToHoursAndMinutes(currentSchedule.saturday_end)
    }
    console.log("currentSchedule:")
    console.log(scheduleObject);
    return scheduleObject;
  }

  // DRY it out!
  function makeScheduleEvent(schedule) {
    var scheduleEvent = [
      {
        id: schedule.user_id,
        title: schedule.user_id,
        start: schedule.sunday_start,
        end: schedule.sunday_end,
        dow: [0]
      },
      {
        id: schedule.user_id,
        title: schedule.user_id,
        start: schedule.monday_start,
        end: schedule.monday_end,
        dow: [1]
      },
      {
        id: schedule.user_id,
        title: schedule.user_id,
        start: schedule.tuesday_start,
        end: schedule.tuesday_end,
        dow: [2]
      },
      {
        id: schedule.user_id,
        title: schedule.user_id,
        start: schedule.wednesday_start,
        end: schedule.wednesday_end,
        dow: [3]
      },
      {
        id: schedule.user_id,
        title: schedule.user_id,
        start: schedule.thursday_start,
        end: schedule.thursday_end,
        dow: [4]
      },
      {
        id: schedule.user_id,
        title: schedule.user_id,
        start: schedule.friday_start,
        end: schedule.friday_end,
        dow: [5]
      },
      {
        id: schedule.user_id,
        title: schedule.user_id,
        start: schedule.saturday_start,
        end: schedule.saturday_end,
        dow: [6]
      }
    ];
    return scheduleEvent;
  }

  var schedule0 = getCurrentSchedule(0);
  var scheduleEvent0 = makeScheduleEvent(schedule0);
  console.log('scheduleEvent0 for user_id = 0:')
  console.log(scheduleEvent0);

  var schedule1 = getCurrentSchedule(1);
  var scheduleEvent1 = makeScheduleEvent(schedule1);
  console.log('scheduleEvent1 for user_id = 1:')
  console.log(scheduleEvent1);

  // hard coded times for testing purposes
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


// I used this demo to get started:
// http://code.runnable.com/UfNTSnKMU1ZgAACt/how-to-add-calendar-using-jquery-and-fullcalendar
// some of the code and comments are still in here

  // Initialize fullCalendar and store into variable.
  // Why in variable?
  // Because doing so we can use it inside other function.
  // In order to modify its option later.
  var calendar = $('#calendar').fullCalendar(
  {

    // header option will define our calendar header.
    // left defines what will be at left position in calendar
    // center defines what will be at center position in calendar
    // right defines what will be at right position in calendar
    header:
    {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },

    // views built into FullCalendar:
    // month, basicWeek, basicDay, agendaWeek, agendaDay
    // defaultView option defines which view to show by default
    defaultView: 'agendaWeek',

    // selectable:true will enable user to select datetime slot
    // selectHelper will add helpers for selectable.
    selectable: true,
    selectHelper: true,

    // when user selects timeslot this option code will execute
    // It has three arguments: start, end and allDay
    // Start means starting time of event
    // End means ending time of event
    // allDay means if event is for entire day or not
    select: function(start, end, allDay) {
      // after selection user will be promted for enter title for event
      var title = prompt('Event Title:');

      // if title is entered calendar will add title and event into fullCalendar
      // this is from a demo & needs much more functionality
      if (title) {
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

    // editable: true - allows user to edit events
    editable: true,

    /*
      events is the main option for calendar.
      for demo we have added predefined events in json object.
    */

    // events: testEvent
    // events: scheduleEvent0
    events: scheduleEvent1



    // events: [
    //   {
    //     title:'Business Hours',
    //     start: '9:00', // start time = 9am
    //     end: '18:00', // end time = 6pm
    //     dow: [1, 2, 3, 4, 5], // repeat Monday-Friday
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

