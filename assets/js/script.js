// constiables connecting to ID's in index.html using JQuery
    
const hour9 = $("#plan9");
const hour10 = $("#plan10");
const hour11 = $("#plan11");
const hour12 = $("#plan12");
const hour13 = $("##plan13");
const hour14 = $("#plan14");
const hour15 = $("#plan15");
const hour16 = $("#plan16");
const hour17 = $("#plan17");

// Variable for moment() to control date format
const time = moment();


// Add date and (as an extra) current time to top of the page
// Used moment to execute format and setInterval to run every second so time display is accurate to the second

setInterval(
    function () {
        $("#currentDay").text(moment().format("DDD MMM, YYYY - HH:mm:ss"))

    }, 1000)

