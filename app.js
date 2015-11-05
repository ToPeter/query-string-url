var main = function() {

  $('#dalejBtn').click(matkaUlozData);

  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });

  $(document).keypress(function(event) {
    if(event.which === 111) {
      $('.description').hide();

      $('.current').children('.description').show();
    }

    else if(event.which === 110) {
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
    }
  });
}

var matkaUlozData = function() {

  var menoField = $('#menoField').val();
  var priezviskoField = $('#priezviskoField').val();
  var datumField = $('#datumField').val();
  var rodneCisloField = $('#rodneCisloField').val();


  var packed = "";
  var data = new Array();
  
  //TODO: for loop
  data[0] = menoField;
  data[1] = priezviskoField;
  data[2] = datumField;
  data[3] = rodneCisloField;

 

  // Initialize packed or we get the word 'undefined' 
  
  for ( i = 0; (i < data.length); i++) {
    if (i > 0) {
      packed += ",";
    }
    packed += escape(data[i]);
  }
  
  //window.location = "passdata2b.html?" + packed;
  window.location.replace("zhrnutie - high fidelity.html?"+ packed);
};

$(document).ready(main);