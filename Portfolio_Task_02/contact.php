<?php

$server = "localhost";
$username ="nandan";
$password ="12345";

$db = "contactfile";
$config = mysqli_connect($server,$username,$password,$db);
if($config){

if(isset($_POST["submit"])){
	
 $nam = $_POST["name"];
 $ph = $_POST["phone"];
 $em = $_POST["emailid"];
 $mss= $_POST["massage"];
 
 

	  $sql = "INSERT INTO contactus (name,phone,emailid,massage)   values('$nam','$ph','$em','$mss')";
     $res=mysqli_query($config,$sql);
     if($res){
       echo "
	   <script> alert('send successful');
	 window.location='contact.html';
	 </script>
	 ";
    
       }
     else{
       echo "insert error";
     }
}
}
else
{
	echo "conection not";
}
	 



?>