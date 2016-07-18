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

$mail->From = 'hackpro@knosys.in';
$mail->FromName = 'Knosys 16';
$mail->addAddress($email);                 // Add a recipient

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters

$mail->Subject = 'Hackpro team';
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
			
			$stmt=$db->prepare('SELECT username FROM hackpro WHERE kid=:kid');
			$stmt->execute(array(':kid'=>$_SESSION['kid']));
			$username = $stmt->fetchColumn(0);
			if($username != NULL)
			{
			
			echo 'You have already registered for this workshop';
		}
		else 
		{
			$stmt1=$db->prepare('INSERT INTO hackpro(kid,username) VALUES(:kid,:username)');
			$stmt1->execute(array(':kid'=>$_SESSION['kid'],':username'=>$_SESSION['username']));
			$body='<p>Thank you for registering  for HACKPRO!!<br><br>
The workshop will be conducted on 19th March at NIT Puducherry.<br><br>
<b>Payment Details:</b><br><br>
Contestants can pay through DD/NEFT/On the Spot<br><br>
<b>Payment Details for DD:</b><br><br>
Contestants may take a Demand Draft in favour of Knosys NITPY for the required amount. They have to send a scanned copy of the DD along with their KID and Name to hackpro@knosys.in. <br>
<b>Payment Details for NEFT:</b><br>
Contestants can transfer the amount to the given account through NEFT.<br>
Account Name : KNOSYS NITPY<br>
Account Number :  33583045760<br>
SBI Branch : SBI, Karaikal<br>
IFSC Code : SBIN0001418<br>
MICR Code : 609002101  <br><br>

<b>On the Spot:</b><br><br>
Contestants those who are not able to make payment through the above method can opt for On the Spot payment. Preference will be given to participants who have already made the payment. On the spot payment will be allowed only if there are free slots. We will notify the registered participants (payment not made) once the slots are getting over.
<br><br>
For more details, you can find our contacts in the Contacts section.<br><br>
Regards<br>
Workshop co-ordinator,<br>
Knosys 16<br><br><br>

</p>';
			$email = $_SESSION['email'];
			$body1='<p>Thank you for registering  for HACKPRO!!<br><br>
The workshop will be conducted on 19th March at NIT Puducherry.<br><br>
P<b>Payment Details:</b><br><br>
Contestants can pay through DD/NEFT/On the Spot<br><br>
<b>Payment Details for DD:</b><br><br>
Contestants may take a Demand Draft in favour of Knosys NITPY for the required amount. They have to send a scanned copy of the DD along with their KID and Name to hackpro@knosys.in. <br>
<b>Payment Details for NEFT:</b><br>
Contestants can transfer the amount to the given account through NEFT.<br>
Account Name : KNOSYS NITPY<br>
Account Number :  33583045760<br>
SBI Branch : SBI, Karaikal<br>
IFSC Code : SBIN0001418<br>
MICR Code : 609002101  <br><br>

<b>On the Spot:</b><br><br>
Contestants those who are not able to make payment through the above method can opt for On the Spot payment. Preference will be given to participants who have already made the payment. On the spot payment will be allowed only if there are free slots. We will notify the registered participants (payment not made) once the slots are getting over.
<br><br>
For more details, you can find our contacts in the Contacts section.<br><br>
Regards<br>
Workshop co-ordinator,<br>
Knosys 16<br><br><br>

</p>';
			
			
			send_mail($email,$body,$body1);
			echo 'registered';
		}

 }
}  
catch(PDOException $e){
    $e->getMessage();
}
  ?>