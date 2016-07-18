
<html>
<head>

	<script>
	    window.onload=function() {
      document.getElementById("myform").submit(); // using ID
    }
	</script>
	</head>

<?php 
include('dbvars.php');
$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
			session_start();
			$stmt=$db->prepare('SELECT username FROM cobweb WHERE kid=:kid');
			$stmt->execute(array(':kid'=>$_SESSION['kid']));
			$username = $stmt->fetchColumn(0);
			if($username != NULL){
				//echo $_SESSION['kid'];
				//header('Location:https://cobweb-knosys16.rhcloud.com/index.php?kid='.$_SESSION['kid'].'%2F%2F&username='.$_SESSION['username'].'');
				?>
				<body style='background-color:black'>
				<form id='myform' method='POST' action='http://cobweb.knosys.in/index.php'>
					<input type='hidden' name='kid' value=<?php echo $_SESSION['kid']?>/>
					<input type='hidden' name='username' value=<?php echo $_SESSION['username'] ?>/>
				</form>

		<?php	}
else{
	echo "Register First";  ?>

	<META http-equiv="refresh" content="3;URL=http://www.knosys.in/">
<?php }	?>		
</body>
</html>

