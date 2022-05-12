<?php

$email = $_POST["email"];
$numberPhone = $_POST["numberPhone"];
$name = $_POST["name"];

if(!isset($email) and !isset($numberPhone) and ($name)) {
    if(mail("info-develop@yandex.ru", "Запрос", "Имя: " $name "Номер: " $numberPhone "Почта: " $email)) {
        echo(true)
    }

} else {
    echo("Не заполнены все данные")
}



?>