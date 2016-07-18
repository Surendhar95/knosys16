<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>


<script type="text/javascript" src="js/validation.min.js"></script>
<link href="css/events.css" rel="stylesheet" type="text/css" media="screen">

<script type="text/javascript" src="js/events_reg.min.js"></script>

</head>
<style>

</style>

<body>
<div id='conts_tit'>
    <h2 ><b>HOSPITALITY</b></h2>
</div>
<?php
session_start();


?>
    
<div class="signin-form">

	<div class="container">
     
        
       
      
       

        
      
       
        
       
    
        
           



         <div id="error" >
        <!-- error will be shown here ! -->
        </div>
   
        <h4 style='position:relative;left:-150px'>Click here to register for Accomodation</h4>
        
        <?php
        if(!isset($_SESSION['username'])){?>
    <div style='position:relative;right:140px' class='text-danger'><h5>Login to register for the accomodation.</h5></div>

  
       <div class="form-group" style='position:relative;left:170px'>
    <div class="col-sm-offset-2 col-sm-10">
            <button type="" class="btn btn-default disabled" style='float : left;' name="reg" id="">
            <span class="glyphicon glyphicon-expand"></span> &nbsp; Register
            </button> 
        </div>  
    </div>
<?php }else{?>
<form class="form-signin" method="post" id="reg_hosp">
 <div class="form-group" style='position:relative;left:170px'>
    <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary" style='float : left;' name="reg" id="btn-submit">
            <span class="glyphicon glyphicon-expand"></span> &nbsp; Register
            </button> 
        </div>  
    </div>
     </form>



<?php }?>
<br>
<br><br>



       <h4 style='text-align:left'>All members of a team should register for accommodation individually.<br>      
It is mandatory to bring your college ID card .<br>
Accommodation Charge will be INR 100 per day per person.<br>
PR desk charge is INR 100 per participant.
Accommodation will start only from 18th of March 2016, 17:00 and should vacate the rooms<br>  before 23:59 on 20th March 2016.<br> Please plan your travel accordingly.<br>
For further details,contact<br>
<b>Sanjay</b>              &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b>Nallu Asadeep</b><br>
   Phone:+91 90437 98559     &nbsp&nbsp&nbsp      Phone:+91 89039 57966</h4>
     

    </div>
    
</div>
    <br><br><br><br>
<script src="bootstrap/js/bootstrap.min.js"></script>

</body>
</html>