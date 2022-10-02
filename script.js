var timeBlock = document.querySelector('.hour')
var currentDate = moment().format('dddd, MMM Do')
var currentHour = moment().format('HH')

$("#currentDay").html(currentDate);



function renderColors() {
    $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('hour')[0]);
if (blockHour < currentHour) {
    $(this).removeClass("future");
    $(this).removeClass("present");
     $(this).addClass("past");
} else if (blockHour === currentHour) {
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