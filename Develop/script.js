// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


  $(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id"); 

    //set items in local storage.
    localStorage.setItem(time, text);

    function hourTracker() {
      //get current number of hours.
      var currentHour = moment().hour(); // use of moment.js
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  hourTracker(); //re-run function
})
