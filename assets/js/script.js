
// Add date and (as an extra) current time to top of the page
// Used moment to execute format and setInterval to run every second so time display is accurate to the second

setInterval(
    function () {
        $("#currentDay").text(moment().format("DDD MMM, YYYY hh:mm:ss"))

    }, 1000)