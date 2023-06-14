<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$mailheader = "De :".$name."<".$email.">\r\n";

$recipient = "emilie.kinnoo@gmail.com";

mail($recipient, $subject, $message, $mailheader)
or die("Erreur !");

echo"Message envoyé"

?>