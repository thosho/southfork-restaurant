<?php

$name=NULL;
$email=NULL;
$companyname=NULL;
$companycontact=NULL;
$companysize=NULL;
$product=NULL;
$subject=NULL;
$message=NULL;
$formname=NULL;


$email=$_POST['your-email'];

$formname=$_POST['formname'];

$search ='zXbp';

$count=0;
if (strpos($email, $search) !== false) {
	$count=1;
    echo '<script>alert("Thanks for Contacting Us. We will get back to you soon.");history.back();</script>';

}

$search2 ='Henryhix';
if (strpos($email, $search2) !== false) {
	$count=1;
    echo '<script>alert("Thanks for Contacting Us. We will get back to you soon.");history.back();</script>';
}

if($count==0){



require 'mail/vendor/autoload.php';
require 'mail/class/class.phpmailer.php';
require 'mail/class/class.smtp.php';

require'mail/vendor/phpmailer/phpmailer/src/PHPMailer.php';

require 'mail/vendor/phpmailer/phpmailer/src/SMTP.php';

$mail = new PHPMailer;



$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                       // Specify main and backup server
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ovtspl.crm@gmail.com';                   // SMTP username
$mail->Password = 'ikluoqevsvtbeikc';              // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
$mail->Port = 587;                                    //Set the SMTP port number - 587 for authenticated TLS

if($formname=="contactus"){

 $mail->setFrom('ovtspl.crm@gmail.com', 'Southfork Restaurant Contact Us');     //Set who the message is to be sent from
} else {     
$mail->setFrom('ovtspl.crm@gmail.com', 'Southfork Restaurant Contact Us');//Set who the message is to be sent from
}
$mail->addAddress('santoshkumargouda099@gmail.com', 'Support Southfork');
// $mail->addAddress('santoshkumargouda099@gmail.com', 'Support Navikra');
//$mail->addAttachment('vendor/autoload.php');   // Add a recipient
$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Southfork Restaurant';
error_reporting(E_ERROR | E_PARSE);
if($formname=="subscribe"){
$mail->Body    = 'You have  a new Subsription from<br>Email: '.$email.'<br><br>';
} else {
// $mail->Body    = 'Demo Request has been raised in Bizapp Website<br>Email: '.$email.'<br>Name: '.$name.'<br>Company Name: '.$companyname.'<br>Contact No: '.$companycontact.'<br>Company Size: '.$companysize.'<br>Product Required: '.$product.'<br>Message: '.$message.'<br>';	
}

$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';


if(!$mail->send()) {
   //echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}

echo '<script>alert("Thanks for Contacting Us. We will get back to you soon.");history.back();</script>';

}

?>