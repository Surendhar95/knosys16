

$( document ).ready(function(){

			//alert('hi');
			$("#back_eve a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#mainpage').load('gaming.php');
				$("title").html("Knosys'16 - Gaming");
					return false;
				});
	   	    $("#format a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('cod4_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - COD 4");
					return false;
				});
	   	     $("#desp a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('cod4_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - COD 4");
					return false;
				});
	   	     $("#rules a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('cod4_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - COD 4");
					return false;
				});
	   	    //  $("#reg a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
			//	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
			//	$('#details').load('dbug_reg.php');
			//	$("title").html("Knosys'16 - COD 4");
			//		return false;
			//	});
	   	      $("#contact a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('cod4_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - COD 4");
					return false;
				});
	   	});
	   	    