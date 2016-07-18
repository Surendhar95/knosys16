

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
	   	    	
			//	$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('ityuktha_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - ITyuktha");
					return false;
				});
	   	    $("#topics a ").click(function(){
	   	    	
			//	$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('ityuktha_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - ITyuktha");
					return false;
				});
	   	     $("#desp a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('ityuktha_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - ITyuktha");
					return false;
				});
	   	     $("#rules a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('ityuktha_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - ITyuktha");
					return false;
				});
	   	      $("#reg a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('over.html');
				$("title").html("Knosys'16 - ITyuktha");
					return false;
				});
	   	      $("#contact a ").click(function(){
	   	    	
				//$('#details').css({"background-color":"white"});
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				$('#details').load('ityuktha_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - ITyuktha");
					return false;
				});
	   	});
	   	    