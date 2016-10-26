<?php

$url = $_POST['url'];
$get = file_get_contents($url);
$get = explode("<span class=bld>",$get);
$get = explode("</span>",$get[1]);  
$converted_amount = preg_replace("/[^0-9\.]/", null, $get[0]);
echo $converted_amount

?>