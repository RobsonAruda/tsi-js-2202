<?php
$dsn = 'mysql:dbname=senac;host=localhost';
$user = "robson";
$pass="123456";

$bd = new PDO($dsn, $user, $pass);

var_dump(bd);