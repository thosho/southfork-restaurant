<?php
// Initialize variables
$name = $email = $contact = $partysize = $startdate = $restime = $message = $formname = null;

// Check and assign POST variables
if (isset($_POST['your-name'])) $name = $_POST['your-name'];
if (isset($_POST['your-email'])) $email = $_POST['your-email'];
if (isset($_POST['your-tel'])) $contact = $_POST['your-tel'];
if (isset($_POST['partySize'])) $partysize = $_POST['partySize'];
if (isset($_POST['startDate'])) $startdate = $_POST['startDate'];
if (isset($_POST['ResTime'])) $restime = $_POST['ResTime'];
if (isset($_POST['your-message'])) $message = $_POST['your-message'];
if (isset($_POST['formname'])) $formname = $_POST['formname'];

// Search strings
$search = 'zXbp';
$search2 = 'Henryhix';

$count = 0;

// Check if the search strings are present
if (strpos($message, $search) !== false || strpos($name, $search2) !== false) {
    $count = 1;
    echo '<script>alert("Thanks for Contacting Us. We will get back to you soon.");history.back();</script>';
}

if ($count == 0) {
    require 'mail/vendor/autoload.php';
    require 'mail/class/class.phpmailer.php';
    require 'mail/class/class.smtp.php';
    require 'mail/vendor/phpmailer/phpmailer/src/PHPMailer.php';
    require 'mail/vendor/phpmailer/phpmailer/src/SMTP.php';

    $mail = new PHPMailer;

    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = getenv('ovtspl.crm@gmail.com'); // Use environment variables for sensitive data
    $mail->Password = getenv('ikluoqevsvtbeikc'); // Use environment variables for sensitive data
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('ovtspl.crm@gmail.com', 'Southfork Restaurant Contact Us');
    $mail->addAddress('santoshkumargouda099@gmail.com', 'Support Southfork');
    $mail->WordWrap = 50;
    $mail->isHTML(true);

    $mail->Subject = 'Southfork Restaurant';
    $mail->Body = "You have received a new reservation from<br>Email: {$email}<br>Name: {$name}<br>Party Size: {$partysize}<br>Date: {$startdate}<br>Time: {$restime}<br>Message: {$message}<br>Contact: {$contact}<br>";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    if (!$mail->send()) {
        echo 'Mailer Error: ' . $mail->ErrorInfo;
        exit;
    }

    echo '<script>alert("Thanks for Contacting Us. We will get back to you soon.");history.back();</script>';
}
?>
