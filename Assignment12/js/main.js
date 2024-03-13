(function () {
  $('#singer1p').hide()
  $('#singer2p').hide()
  $('#singer3p').hide()
  $('#singer4p').hide()
})();


const w = $('#navigation').innerWidth();
$('#navigation').animate({ left: `-${w}` });

$('#open').click(function (e) {
  e.preventDefault();
  if ($('#navigation').css('left') == '0px')
    $('#navigation').animate({ left: `-${w}` });

  else
    $('#navigation').animate({ left: 0 });

})

$('.fa-xmark').click(function (e) {
  e.preventDefault();
  $('#navigation').animate({ left: `-${w}` });
})


$('#singer1').click(function (e) {
  e.preventDefault();
  $('#singer1p').slideToggle(500)
})

$('#singer2').click(function (e) {
  e.preventDefault();
  $('#singer2p').slideToggle(500)
})

$('#singer3').click(function (e) {
  e.preventDefault();
  $('#singer3p').slideToggle(500)
})

$('#singer4').click(function (e) {
  e.preventDefault();
  $('#singer4p').slideToggle(500)
})



$('textarea').keyup(function () {

  let characterCount = $(this).val().length,
    remainingChars = $('#remainingChars');


  if (characterCount < 100)
    remainingChars.text(100 - characterCount + ' ');
  else
    remainingChars.text(' your available character finished ')
});


const countDownDate = new Date("Aug 5, 2024 00:00:00").getTime();

var downCounter = setInterval(function () {

  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  if (days < 9)
    $('#days').text('0' + days + ' D')
  else
    $('#days').text(days + ' D')

  if (hours < 9)
    $('#hours').text('0' + hours + ' H')
  else
    $('#hours').text(hours + ' H')

  if (minutes < 9)
    $('#minutes').text('0' + minutes + ' M')
  else
    $('#minutes').text(minutes + ' M')

  if (seconds < 9)
    $('#seconds').text('0' + seconds + ' S')
  else
    $('#seconds').text(seconds + 'S')

  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = ""
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "PARTY TIME!!";
  }

}, 1000);
