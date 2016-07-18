


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
				$('#details').load('gaming_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Gaming");
					return false;
				});
	   	    $("#fifa a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#mainpage').load('fifa14.php');
				$("title").html("Knosys'16 - Gaming");
					return false;
				});
	   	     $("#cod4 a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#mainpage').load('cod4.php');
				$("title").html("Knosys'16 - Gaming");
					return false;
				});
	   	     $("#blur a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#mainpage').load('blur.php');
				$("title").html("Knosys'16 - Gaming");
					return false;
				});
	   	    //  $("#reg a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
			//	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
			//	$('#details').load('dbug_reg.php');
			//	$("title").html("Knosys'16 - Gaming");
			//		return false;
			//	});
	   	      $("#contact a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('gaming_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - Gaming");
					return false;
				});
	   	});
	   	    