<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$message = $_POST['message'];

// Формирование самого письма
if (empty($email)) {$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое письмо</h2>
<b>Сообщение:</b><br>$message
";} else {
  $title = "Подписка на рассылку Universal";
$body = "
<h2>Новое письмо</h2>
<b>Подписка оформлена</b>
";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'sergey.student1994@mail.ru'; // Логин на почте
    $mail->Password   = 'arejay50607011'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('sergey.student1994@mail.ru', 'Сергей Кузьмичев'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('drumer19940310@mail.ru');  
    $mail->addAddress($email); // Ещё один, если нужен

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if (empty($email)) {header('location: thankyou.html');}
else {header('location: newsletter_thanks.html');}
