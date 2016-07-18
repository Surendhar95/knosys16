<?php
session_start();
	
	try{
		function send_mail($email,$body,$body1){
require_once('phpmailer/PHPMailerAutoload.php');

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mailgun.org';                     // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'postmaster@knosys.in';   // SMTP username
$mail->Password = '9f91bfcf04456bf6ccad07f91f0a5362';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, only 'tls' is accepted

$mail->From = 'cobweb@knosys.in';
$mail->FromName = 'Knosys 16';
$mail->addAddress($email);                 // Add a recipient

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters

$mail->Subject = 'CobWeb Team';
$mail->Body    = $body;
$mail->AltBody = $body1;

if(!$mail->send()) {
   // echo 'Message could not be sent.';
   // echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
   // echo 'Message has been sent';
}
}
		
include("dbvars.php");
//$db=new PDO("mysql:host=$host;dbname=$dbase",$username,$password);
$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
	if(isset($_POST['reg'])){
			$event=$_SESSION['event'];

			$stmt=$db->prepare('SELECT username FROM cobweb WHERE Kid=:kid');
			$stmt->execute(array(':kid'=>$_SESSION['kid']));
			$username = $stmt->fetchColumn(0);
			if($username != NULL)
			{
			
			echo 'You have already registered for this event';
		}
		else 
		{
			$stmt1=$db->prepare('INSERT INTO cobweb VALUES(:kid,:username)');
			$stmt1->execute(array(':kid'=>$_SESSION['kid'],':username'=>$_SESSION['username']));
			$body='Thank you for registering for CobWeb. <br>
Wish you all the best for the competition. <br>
Your questions are already live.A link to the portal will be available at www.knosys.in after you login. <br>
For any queries regarding the event please post a mail to cobweb@knosys.in <br>
For further details about the event and accommodation visit www.knosys.in<br>
Hope you’ll enjoy participating<br>

Regards<br>
Event coordinator.
';
$body1='Thank you for registering for CobWeb. <br>
Wish you all the best for the competition. <br>
Your questions are already live.A link to the portal will be available at www.knosys.in after you login. <br>
For any queries regarding the event please post a mail to cobweb@knosys.in <br>
For further details about the event and accommodation visit www.knosys.in<br>
Hope you’ll enjoy participating<br>

Regards<br>
Event coordinator.
';
			$email = $_SESSION['email'];
			send_mail($email,$body,$body1);
			echo 'registered';
		}

 }
}  
catch(PDOException $e){
    $e->getMessage();
}
  ?>