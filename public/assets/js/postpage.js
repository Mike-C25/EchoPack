$(document).ready(function() {
   $("#reply-pullout").hide(); 
});

$('.c-reply').on('click', function (e) {
  
  e.preventDefault();
  $("#reply-pullout").fadeIn(600);
  
});