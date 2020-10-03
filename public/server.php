<?php
header('Access-Control-Allow-Origin:*');
$_POST = $_POST ? $_POST : $_GET;
// var_dump($_POST['content']);
$jsonStr = $_POST['content'];
$arr = json_decode($jsonStr, true);
$push_api_url = "http://47.112.120.213:2121/";
$post_data = array(
   "type" => "publish",
   "content" => $_POST['content'],
   "to" => $_POST['id'], 
);
// var_dump($_POST['content']);
$ch = curl_init ();
curl_setopt ( $ch, CURLOPT_URL, $push_api_url );
curl_setopt ( $ch, CURLOPT_POST, 1 );
curl_setopt ( $ch, CURLOPT_HEADER, 0 );
curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt ( $ch, CURLOPT_POSTFIELDS, $post_data );
curl_setopt ($ch, CURLOPT_HTTPHEADER, array("Expect:"));
$return = curl_exec ( $ch );
curl_close ( $ch );
var_export($return);