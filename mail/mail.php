<?php
// Please specify your Mail Server - Example: mail.yourdomain.com.
ini_set("SMTP","mail.youthrightsmedia.com");

// Please specify an SMTP Number 25 and 8889 are valid SMTP Ports.
ini_set("smtp_port","25");

// Please specify the return address to use
ini_set('sendmail_from', 'info@youthrightsmedia.com');

// Set parameters of the email
$to = "info@youthrightsmedia.com";
$name = "mail";
$email = "email";
$message = "message";

// send email
$sentmail = mail($to,$name,$email,$message);

// if your email succesfully sent
 if($sentmail){
 echo "Email Has Been Sent.";
 }
 else {
 echo "Your Email Was Not Sent. ";
 }

?>
