<?php
session_start();
	
	try{
		
include("dbvars.php");
//$db=new PDO("mysql:host=$host;dbname=$dbase",$username,$password);
$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
	if(isset($_POST['new'])){
			$email =$_POST['email'];
			$pass=$_POST['newpass'];
			$pass = md5($pass);

			$stmt=$db->prepare('SELECT Username FROM users WHERE Email=:mail ');
			$stmt->execute(array(':mail'=>$email));

			$result=$stmt->fetch();
			$username = $result['Username'];
			
			
			if($username != NULL)
			{
				$stmt1=$db->prepare('UPDATE users SET Password = :pass WHERE Email =:mail');
			$stmt1->execute(array(':pass'=>$pass,':mail'=>$email));
			$_SESSION['active']='true';
			
			
				echo 'logged';
			}
			else if($user == NULL){
				echo 'This email id is not registered';
			}
			


			
		

 }
}  
catch(PDOException $e){
    $e->getMessage();
}
  ?>