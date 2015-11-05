var main = function() {

  //var motherName = $('.menoMatky').text();

var query = window.location.search;
  // Skip the leading ?, which should always be there, 
  // but be careful anyway
  if (query.substring(0, 1) == '?') {
    query = query.substring(1);
  }
  var data = query.split(','); 
  for (i = 0; (i < data.length); i++) {
    data[i] = unescape(data[i]);
    
  }

  $('.menoMatky').text(data[0]);
  $('.priezvyskoMatky').text(data[1]);
  $('.datMatky').text(data[2]);
  $('.rocMatky').text(data[3]);
  $('.prislMatky').text(data[4]);




}







$(document).ready(main);