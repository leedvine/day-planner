
// Variable for moment() to control date format
let time = moment();



// Add date and (as an extra) current time to top of the page
// Used moment to execute format and setInterval to run every second so time display is accurate to the second

setInterval(function () {
  $("#currentDay").text(moment().format("DDD MMM, YYYY - HH:mm:ss"));
}, 1000);

//Loop through each time-block and retrieve ID stored in local storage
function setPlanner() {


  //clear previously held local storage before generating new
  localStorage.clear();

  $(".time-block").each(function () {
    let id = $(this).attr("id");
    let description = localStorage.getItem(id);

    if (description !== null) {
      $(this).children(".description").val(description);
    }
  });
}

//Run set planner function
setPlanner();


//Designate variable to save button and on clicking the save button store data via ID in to local storage

let saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
  let time = $(this).parent().attr("id");
  let description = $(this).siblings(".description").val();

  localStorage.setItem(time, description);
});

// Create function to check time and assign class dependednt on current time
// If the hour assigned has gone then assign .past
// If within that hour then assign .present
// If that hour has yet to arrive then assign future

function pastPresentFuture() {
  hour = time.hours();
  $(".time-block").each(function () {
    let thisHour = parseInt($(this).attr("id"));

    if (thisHour > hour) {
      $(this).addClass("future");
    } else if (thisHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

// Run pastPresentFuture function

pastPresentFuture();
