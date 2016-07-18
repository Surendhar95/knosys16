 


 
			$( document ).ready(function(){
				
				function adjustStyle(width) {
    width = parseInt(width);
    if (width < 768) {
        $("#size-stylesheet").attr("href", "css/mobile.css");
    } else if ((width >= 768) && (width < 992)) {
        $("#size-stylesheet").attr("href", "css/tab.css");
    } else{
       $("#size-stylesheet").attr("href", "css/desktop.css"); 
    }
}

$(function() {
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
});

	var currentIndex = 0,
  items = $('.slider div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.slider div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);



var NcurrentIndex = 0,
  Nitems = $('.notification div'),
  NitemAmt = Nitems.length;

function NcycleItems() {
  var Nitem = $('.notification div').eq(NcurrentIndex);
  Nitems.hide();
  Nitem.css('display','inline-block');
}

var NautoSlide = setInterval(function() {
  NcurrentIndex += 1;
  if (NcurrentIndex > NitemAmt - 1) {
    NcurrentIndex = 0;
  }
  NcycleItems();
}, 3000);



	   	    $("#show_login").click(function(){
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#mainpage').css({"background-color":"white"});
				
				
				$('#mainpage').load('login.php').hide().delay('200').fadeIn('slow');
				$("title").html("Knosys'16 - Login");
					return false;
				});
	   	    $("#cobb button").click(function(){
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#mainpage').css({"background-color":"white"});
				
				
				$('#mainpage').load('cobweb_reg.php').hide().delay('200').fadeIn('slow');
				$("title").html("Knosys'16 - Login");
					return false;
				});
	   	     $("#pro").click(function(){
				$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				//$('#mainpage').css({"background-color":"white"});
				
				
				$('#mainpage').load('dash.php').hide().delay('200').fadeIn('slow');
				$("title").html("Knosys'16 - Dashboard");
					return false;
				});
				 
   
        
			$('#reg a').click(function(){
				$('[data-toggle="tooltip"]').tooltip('hide');
            	$('#mainpage').css({"background-image":"url('svg/default.svg')"});
            	
            	$('#mainpage').load('regiss.php').hide().delay('200').fadeIn('slow');
				
				$("title").html("Knosys'16 - Register");
				$('#mainpage').load('regiss.php');
					return false;
				});

				$('#workshop a').click(function(){
					$('[data-toggle="tooltip"]').tooltip('hide');
					$('#mainpage').css({"background-image":"url('svg/default.svg') "});
					//$('#mainpage').css({"background-color":"white"});
					
				
					$('#mainpage').load('work.php').hide().delay('200').fadeIn('slow');
					$("title").html("Knosys'16 - Workshops");
					return false;
				});
				$('#events a').click(function(){
					$('[data-toggle="tooltip"]').tooltip('hide');
					
				
					$('#mainpage').css({"background-image":"url('svg/default.svg') "});
					// /$('#mainpage').css({"background-color":"white"});
					$('#mainpage').load('events.php').hide().delay('200').fadeIn('slow');
					$("title").html("Knosys'16 - Events");
					return false;
				});
				$('#contact a').click(function(){
					$('[data-toggle="tooltip"]').tooltip('hide');
					$('#mainpage').css({"background-image":"url('svg/default.svg') "});
					$('#mainpage').load('cont.html').hide().delay('200').fadeIn('slow');
				
					//$('#mainpage').load('soon.html');
				
					$("title").html("Knosys'16 - Contacts");
					return false;
				});
				$('#sponsors a').click(function(){
					$('[data-toggle="tooltip"]').tooltip('hide');
					$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				
					$('#mainpage').load('sponsors.html').hide().delay('200').fadeIn('slow');
					
					//$('#mainpage').load('contact.html #' + $(this).attr('href'));
					$("title").html(" Knosys'16 - Sponsors");
					return false;
				});
				$('#accom a').click(function(){
					$('[data-toggle="tooltip"]').tooltip('hide');
					$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				
					$('#mainpage').load('acco.php').hide().delay('200').fadeIn('slow');
					
					//$('#mainpage').load('contact.html #' + $(this).attr('href'));
					$("title").html(" Knosys'16 - Hospitality");
					return false;
				});
					$('#guest a').click(function(){
					$('[data-toggle="tooltip"]').tooltip('hide');
					$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				
					$('#mainpage').load('guesttalk.php').hide().delay('200').fadeIn('slow');
					
					//$('#mainpage').load('contact.html #' + $(this).attr('href'));
					$("title").html(" Knosys'16 - Guest Talk");
					return false;
				});
					$('#reach').click(function(){
					$('[data-toggle="tooltip"]').tooltip('hide');
					$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				
					$('#mainpage').load('map.html').hide().delay('200').fadeIn('slow');
					
					//$('#mainpage').load('contact.html #' + $(this).attr('href'));
					$("title").html(" Knosys'16 - How to reach");
					return false;
				});
					$('#webteam').click(function(){
					$('[data-toggle="tooltip"]').tooltip('hide');
					$('#mainpage').css({"background-image":"url('svg/default.svg') "});
				
					$('#mainpage').load('webteam.html').hide().delay('200').fadeIn('slow');
					
					//$('#mainpage').load('contact.html #' + $(this).attr('href'));
					$("title").html(" Knosys'16 - WebTeam");
					return false;
				});
				
			});
function already(){
		$('#mainpage').css({"background-image":"url('img/emailinvalid.png')"});
	}
	function success(){
		$('#mainpage').css({"background-image":"url('img/granteduser.png')"});
		$('#regg').attr('href','#');
	}

function fail(){
		$('#mainpage').css({"background-image":"url('img/invalidmail.png')"});
	}
function done(){
	$('#regg').attr('href','#');
		
	}

function showpopup()
{
   $("#loginform").fadeIn();
   $("#loginform").css({"visibility":"visible","display":"block"});
}

function hidepopup()
{
   $("#loginform").fadeOut();
   $("#loginform").css({"visibility":"hidden","display":"none"});
}
function hide(){
	$('#regg').hide();
}