$(document).ready(function() {
   $("#login").hide(); 

   

	  $('.tab a').on('click', function (e) {
	  
		  e.preventDefault();
		  
		  $(this).parent().addClass('active');
		  $(this).parent().siblings().removeClass('active');
		  
		  target = $(this).attr('href');

		  $('.tab-content > div').not(target).hide();
		  
		  $(target).fadeIn(600);
	  
	  });

	  $('#loginSubmit').on('click',function(e) {

          var userVerify = {
	  	      userName: $('#login-email').val().trim(),
	  	      pass:     $('#login-pass').val().trim(),
          }

	  	  $.ajax('api/User', {
	  	  	type: "GET",
            data: userVerify,
            success: function(data) {
            	alert("You are now logged in")
            },
            error: function(xhr,status,error) {
            	alert("Error,Try again")
            }
	  	  
	  });

	    $('#newSubmit').on('click',function(e) {

          var userCreate = {
	  	      firstName: $('#new-first').val().trim(),
	  	      lastName:  $('#new-last').val().trim(),
	  	      userName:   $('#new-user').val().trim(),
	  	      email:  $('#new-email').val().trim(),
	  	      password:  $('#new-pass').val().trim()
          }

	  	  $.ajax('api/User', {
	  	  	type: "POST",
            data: userCreate,
	  	    success: function() {
	  	    	alert("You are now a member of EchoPack")
	  	    },
	  	    error:function(xhr,status,error) {
	  	    	console.log(status);
	  	    	alert("unsuccessful");
	  	    }
	  	  	//check if row successfully added
	  	  })
	  })
});

