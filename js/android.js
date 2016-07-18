

$( document ).ready(function(){

			//alert('hi');
				 $("#back_work a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#mainpage').load('work.php');
				$("title").html("Knosys'16 - Workshops");
					return false;
				});
			
	   	    $("#course a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('android_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - android");
					return false;
				});
	   	     $("#desp a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('android_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - android");
					return false;
				});
	   	     $("#detail a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('android_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - android");
					return false;
				});
	   	      $("#reg a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('overwork.html');
				$("title").html("Knosys'16 - android");
					return false;
				});
	   	      $("#contact a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('android_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - android");
					return false;
				});
	   	      $("#faq a ").click(function(){
	   	    	$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#details').css({"background-color":"white"});
				$('#details').load('android_details.html #' + $(this).attr('href'));
				$("title").html("Knosys'16 - android");
					return false;
				});
	   	});
	   	    