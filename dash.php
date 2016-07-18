<!DOCTYPE  html>
<html>
<head>

</head>
<body>
<?php 
session_start();


  
  try{
    
include("dbvars.php");
//$db=new PDO("mysql:host=$host;dbname=$dbase",$username,$password);
$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
 if(isset($_SESSION['kid'])){

      $stmt=$db->prepare('SELECT * FROM users WHERE Kid=:kid ');
      $stmt->execute(array(':kid'=>$_SESSION['kid']));

      $result=$stmt->fetch();
      $kid=$result['Kid'];
      $username = $result['Username'];
      $Fullname = $result['Fullname'];
      $Phone = $result['Phone'];
      $email = $result['Email'];
      $Sex = $result['Sex'];
      $college = $result['College'];

}
}  
catch(PDOException $e){
    $e->getMessage();
}
  


?>


  <div class="row">
                <div class="col-md-6">
                  <!--   Kitchen Sink -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <b>DASHBOARD</b>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
<tr>
<td ><div  align="left"  id="tb-name"><b>Kid:</b></div></td>
<td><?php  echo  $kid; ?></td>
</tr>
<tr>
<td><div  align="left"  id="tb-name"><b>Username:</b></div></td>
<td><?php  echo $username; ?>  </td>
</tr>
<tr  id="lg-1">
<td  class="tl-1"><div  align="left"  id="tb-name"><b>Fullname:</b></div></td>
<td  class="tl-4"><?php  echo  $Fullname;  ?></td>
</tr>
  <style type="text/css"> 

</style>
           



<tr  id="lg-1">
<td  class="tl-1"><div  align="left"  id="tb-name"><b>Email  id:</b></div></td>
<td  class="tl-4"><?php  echo $email;  ?></td>
</tr>
<tr  id="lg-1">
<td  class="tl-1"><div  align="left"  id="tb-name"><b>Phone No.:</b></div></td>
<td  class="tl-4"><?php  echo $Phone;  ?></td>
</tr>
<tr  id="lg-1">
<td  class="tl-1"><div  align="left"  id="tb-name"><b>College Name:</b></div></td>
<td  class="tl-4"><?php  echo  $college;  ?></td>
</tr>


</thead>

</table>
</div>
</div>
</div>





  <div class="col-md-10">
                    <!--    Bordered Table  -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <b>Events Registered:</b>
                        </div>
                   
                           <div class="table-responsive table-bordered">
                                <table class="table">
                                  <?php 
 $stmt1=$db->prepare('SELECT * FROM antagon WHERE Kid=:kid ');
      $stmt1->execute(array(':kid'=>$_SESSION['kid']));

      $result=$stmt1->fetchAll();
      if($result!=NULL){



                                  ?>
                                  <tr>
<td  class="tl-1"><div  align="left"  id="tb-name">Antagon</div></td>
<tr>
<?php } ?>
 <?php 
 $stmt1=$db->prepare('SELECT * FROM cobweb WHERE Kid=:kid ');
      $stmt1->execute(array(':kid'=>$_SESSION['kid']));

      $result=$stmt1->fetch();
      if($result!=NULL){



                                  ?>
                                  <tr>
<td  class="tl-1"><div  align="left"  id="tb-name">Cobweb</div></td>
<tr>
<?php } ?>
<?php 
 $stmt1=$db->prepare('SELECT * FROM code_math WHERE Kid=:kid ');
      $stmt1->execute(array(':kid'=>$_SESSION['kid']));

      $result=$stmt1->fetch();
      if($result!=NULL){



                                  ?>
                                  <tr>
<td  class="tl-1"><div  align="left"  id="tb-name">Code Math</div></td>
<tr>
<?php } ?>

<?php 
 $stmt1=$db->prepare('SELECT * FROM dbug WHERE Kid=:kid ');
      $stmt1->execute(array(':kid'=>$_SESSION['kid']));

      $result=$stmt1->fetch();
      if($result!=NULL){



                                  ?>
                                  <tr>
<td  class="tl-1"><div  align="left"  id="tb-name">D Bug C Bug</div></td>
<tr>
<?php } ?>
<?php 
 $stmt1=$db->prepare('SELECT * FROM hackathon WHERE Kid=:kid ');
      $stmt1->execute(array(':kid'=>$_SESSION['kid']));

      $result=$stmt1->fetch();
      if($result!=NULL){



                                  ?>
                                  <tr>
<td  class="tl-1"><div  align="left"  id="tb-name">Hackathon</div></td>
<tr>
<?php } ?>
<?php 
 $stmt1=$db->prepare('SELECT * FROM ityuktha WHERE Kid=:kid ');
      $stmt1->execute(array(':kid'=>$_SESSION['kid']));

      $result=$stmt1->fetch();
      if($result!=NULL){



                                  ?>
                                  <tr>
<td  class="tl-1"><div  align="left"  id="tb-name">Ityuktha</div></td>
<tr>
<?php } ?>
<?php 
 $stmt1=$db->prepare('SELECT * FROM linux WHERE Kid=:kid ');
      $stmt1->execute(array(':kid'=>$_SESSION['kid']));

      $result=$stmt1->fetch();
      if($result!=NULL){



                                  ?>
                                  <tr>
<td  class="tl-1"><div  align="left"  id="tb-name">Linux Expert</div></td>
<tr>
<?php } ?>
<?php 
 $stmt1=$db->prepare('SELECT * FROM optimus WHERE Kid=:kid ');
      $stmt1->execute(array(':kid'=>$_SESSION['kid']));

      $result=$stmt1->fetch();
      if($result!=NULL){



                                  ?>
                                  <tr>
<td  class="tl-1"><div  align="left"  id="tb-name">Optimus</div></td>
<tr>
<?php } ?>
</table>
</div>
</div>
</div>









 <div class="col-md-10">
                    <!--    Bordered Table  -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <b>Workshops Registered:</b>
                        </div>
                      
                           <div class="table-responsive table-bordered">
                                <table class="table">
                                   <?php 
 $stmt1=$db->prepare('SELECT * FROM android WHERE Kid=:kid ');
      $stmt1->execute(array(':kid'=>$_SESSION['kid']));

      $result=$stmt1->fetchAll();
      if($result!=NULL){



                                  ?>
                                  <tr>
<td  class="tl-1"><div  align="left"  id="tb-name">Android app development</div></td>
<tr>
<?php } ?>
 <?php 
 $stmt1=$db->prepare('SELECT * FROM hackpro WHERE Kid=:kid ');
      $stmt1->execute(array(':kid'=>$_SESSION['kid']));

      $result=$stmt1->fetch();
      if($result!=NULL){



                                  ?>
                                  <tr>
<td  class="tl-1"><div  align="left"  id="tb-name">Hackpro</div></td>
<tr>
<?php } ?>
                              
</table>
</div>
</div>
</div>






</form>
                        

</div>


</div>
</div>
</div>




</body>
</html>