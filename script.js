var timeBlock = document.querySelector('.hour')
var currentDate = moment().format('dddd, MMM Do')
var currentHour = moment().format('HH')

$("#currentDay").html(currentDate);

// Add Event Listener
$(".saveBtn").on("click", function () {
    var userText = $(this).siblings('.description').val();
    var eventTime = $(this).parent().attr('id');

    localStorage.setItem(eventTime, userText);
})

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

function renderColors() {
    $('.time-block').each(function() {
    var blockHour = Number($(this).attr('id').split('hour')[0]);
  if (blockHour < currentHour) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  } else if (blockHour == currentHour) {
    $(this).removeClass("future");
    $(this).removeClass("past");
    $(this).addClass("present");
  } else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
});
}

renderColors();