

$( document ).ready(function(){

			//alert('hi');
		
	   	      $("#back_eve a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#mainpage').load('events.php');
				$("title").html("Knosys'16 - Events");
					return false;
				});
	   	    $("#format a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('cobweb_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Cobweb");
					return false;
				});
	   	     $("#desp a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('cobweb_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Cobweb");
					return false;
				});
	   	     $("#rules a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('cobweb_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Cobweb");
					return false;
				});
	   	      $("#reg a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('cobweb_reg.php');
				$("title").html("Knosys'16 - Cobweb");
					return false;
				});
	   	      $("#contact a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('cobweb_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Cobweb");
					return false;
				});
	   	});
	   	    