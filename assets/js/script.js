//display current day in id currentDay
var currentDay = dayjs().format("MMM D, YYYY");


$(document).ready(function() {
  $("#currentDay").text(currentDay);
  var storedText = localStorage.getItem('savedText');
  if (storedText) {
    $('.description').val(storedText)
  }

});

//update the time blocks
function updateBlocks() {


  $('.time-block').each(function() {
    var hourBlock = parseInt($(this).attr('id').split('-')[1]);
    var hour = dayjs().hour();
    if (hourBlock < hour) {
      $(this).addClass('past')
      $(this).removeClass('present');
      $(this).removeClass('future');

    } else if (hourBlock === hour) {
      $(this).addClass('present')
      $(this).removeClass('past');
      $(this).removeClass('future');

    } else {
      $(this).addClass('future')
      $(this).removeClass('past');
      $(this).removeClass('present');
    }
  });
}

updateBlocks();


//event handler for save button with local storage
$('.saveBtn').on('click', function() {
  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');

  localStorage.setItem('savedText', text)
  // console.log('time', time)
  console.log('text', text)
});





