<?php
    $to = 'schikk@ukr.net';

    $subject = 'Sign In';

  /*  $headers = "From: realestate.local\r\n";
    $headers .= "Reply-To: realestate.local\r\n";*/
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";

    $message = '<html><body>';
    $message .= '<table rules="all" style="border-color: #eee; border-radius: 2px; margin: 10px;" cellpadding="10">';
    $message .= "<tr><td style='background: #fff; color: #fff; border-radius: 2px; padding: 15px 20px; font-size: 15px;' colspan='2'><strong>Sign in form</strong></td></tr>";
    $message .= "<tr style='background: #fefefe;'><td><strong>E-mail</strong> </td><td>" . strip_tags($_POST['sign-email']) . "</td></tr>";  
    $message .= "</table>";
    $message .= '</body></html>';
				
if ( $_POST["surname"] == '' ){
            $sentMail = @mail($to, $subject, $message, $headers);
        }
?>