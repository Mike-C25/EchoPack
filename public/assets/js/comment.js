$(document).ready(function() {



    $('.postc-submit').on('click', function(e) {
       let comment = $('.postb-text textarea').val().trim();
       let sub = window.location.href.indexOf("?=id")
       console.log(sub);
       let fID = window.location.href.substring(sub)
       console.log(fID);

    });	

});    	