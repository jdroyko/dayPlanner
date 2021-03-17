$(document).ready(function () {

    //function for bringing in moment and appennding to page
    /*Acceptance Criteria: WHEN I open the planner
   THEN the current day is displayed at the top of the calendar*/
    var today = moment();
    $("#1a").text(today.format("ddd MMM Do, YYYY"));

    /*WHEN I view the timeblocks for that day
    THEN each timeblock is color coded to indicate whether it is in the past, present, or future*/

    //global variables for the hours and relating them to the html files though jQuery
    var eight = $("#hour-8");
    var nine = $("#hour-9");
    var ten = $("#hour-10");
    var eleven = $("#hour-11");
    var twelve = $("#hour-12");
    var thirteen = $("#hour-13");
    var fourteen = $("#hour-14");
    var fifteen = $("#hour-15");
    var sixteen = $("#hour-16");
    var seventeen = $("#hour-17");
    var eighteen = $("#hour-18");


    var currentHour = moment().hours();
    console.log(currentHour); //Tests to see if the hours is working 

    // need to set interval to refresh to make sure that it is getting the right hours
    //function Need to set a loop that looks through if the hour is the current hour,
    $('.time-block').each(function () {
        var time = parseInt($(this).attr("id").split("hour-")[1]);
        console.log(time)

        if (currentHour > time) {

        }
    });


    //if it is past = gray
    //if it is current = red
    // if it's future = green


    // //Add button click that saves the button into local storage?
    // $('.saveBtn').on('click', function () {
    //     var value = $(this).siblings('.description').val()
    //     var time$(this).parent.attr('id');

    //     //Set item to local storage
    // })





});