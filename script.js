// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  //display current day & time.
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
  //assign saveBtn click listener for user input and time stamp??
  $(".saveBtn").on("click", function () {
      console.log(this);
      var text = $(this).siblings(".description").val(); 
      var time = $(this).parent().attr("id"); 

      
      localStorage.setItem(time, text);
  })
  //load any saved data from LocalStorage - 24 hour to 12 hour conversion.
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  function hourTracker() {
        var currentHour = moment().hour(); // use of moment.js

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

        //used to check if the time has passed
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
  }
  hourTracker(); //used to re-run function
})
