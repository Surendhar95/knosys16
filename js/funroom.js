

$( document ).ready(function(){

			//alert('hi');
	   	    
	   	      $("#back_eve a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#mainpage').load('events.php');
				$("title").html("Knosys'16 - Events");
					return false;
				});
	   	     $("#desp a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('funroom_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Funroom");
					return false;
				});
	   	   
	   	      $("#contact a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('funroom_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Funroom");
					return false;
				});
	   	});
	   	    