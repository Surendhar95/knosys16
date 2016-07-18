

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
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('shoot_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Shoot The Frame");
					return false;
				});
	   	     $("#rules a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('shoot_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Shoot The Frame");
					return false;
				});
	   	      $("#desp a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('shoot_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Shoot The Frame");
					return false;
				});
	   	     $("#cond a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('shoot_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Shoot The Frame");
					return false;
				});
	   	      $("#reg a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('dbug_reg.php');
				$("title").html("Knosys'16 - Shoot The Frame");
					return false;
				});
	   	      $("#contact a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('shoot_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Shoot The Frame");
					return false;
				});
	   	});
	   	    