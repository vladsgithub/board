<?php

$method = $_SERVER['REQUEST_METHOD'];
$path = 'json/adverts.json';
$json = json_decode(file_get_contents($path), true);
$uriArray = explode("/", $_SERVER['REQUEST_URI']);
$id = $uriArray[2];
$isOneItem = (is_numeric($id) && $id >= 0) ? true : false;


switch ($method) {
  case 'PUT':
	/*$data = json_decode(file_get_contents("php://input"), false);*/

	/*echo file_get_contents("php://input");
    echo 'PUT: '.$_SERVER['REQUEST_URI'];*/

	foreach($json as $key => $struct) {
		if ($struct['id'] == $id) {
			$json[$key] = json_decode(file_get_contents("php://input"));
			break;
		}
	}

	$fp = fopen($path, 'w');
	fwrite($fp, json_encode($json));
	fclose($fp);

    break;
  case 'POST':
    echo 'POST: '.$_SERVER['REQUEST_URI'];
    break;
  case 'GET':
	$result = null;

	if ($isOneItem) {
		foreach($json as $struct) {
			if ($struct['id'] == $id) {
				$result = $struct;
				break;
			}
		}
	} else {
		$result = $json;
	}

	echo json_encode($result);
    break;

  case 'DELETE':
    echo 'DELETE: '.$_SERVER['REQUEST_URI'];
    break;
  default:
    echo 'default: '.$_SERVER['REQUEST_URI'];
    break;
}

?>


<?php
/* http://php.net/manual/ru/reserved.variables.server.php */
/* http://blog.brunoscopelliti.com/building-a-restful-service-with-angularjs-and-php-backend-setup/ */
/* echo 'GET: '.$_SERVER['REQUEST_URI'].$json; */
    /* header('Content-Type: application/json'); */
  	/* echo json_encode($json); */
  	/*echo 'GET: '.$_SERVER['REQUEST_URI'].'<br/>';
echo '$uriArray='.$uriArray[2];*/


/*
$indicesServer = array('PHP_SELF',
'argv',
'argc',
'GATEWAY_INTERFACE',
'SERVER_ADDR',
'SERVER_NAME',
'SERVER_SOFTWARE',
'SERVER_PROTOCOL',
'REQUEST_METHOD',
'REQUEST_TIME',
'REQUEST_TIME_FLOAT',
'QUERY_STRING',
'DOCUMENT_ROOT',
'HTTP_ACCEPT',
'HTTP_ACCEPT_CHARSET',
'HTTP_ACCEPT_ENCODING',
'HTTP_ACCEPT_LANGUAGE',
'HTTP_CONNECTION',
'HTTP_HOST',
'HTTP_REFERER',
'HTTP_USER_AGENT',
'HTTPS',
'REMOTE_ADDR',
'REMOTE_HOST',
'REMOTE_PORT',
'REMOTE_USER',
'REDIRECT_REMOTE_USER',
'SCRIPT_FILENAME',
'SERVER_ADMIN',
'SERVER_PORT',
'SERVER_SIGNATURE',
'PATH_TRANSLATED',
'SCRIPT_NAME',
'REQUEST_URI',
'PHP_AUTH_DIGEST',
'PHP_AUTH_USER',
'PHP_AUTH_PW',
'AUTH_TYPE',
'PATH_INFO',
'ORIG_PATH_INFO') ;

echo '<table cellpadding="10">' ;
foreach ($indicesServer as $arg) {
if (isset($_SERVER[$arg])) {
echo '<tr><td>'.$arg.'</td><td>' . $_SERVER[$arg] . '</td></tr>' ;
}
else {
echo '<tr><td>'.$arg.'</td><td>-</td></tr>' ;
}
}
echo '</table>' ;
*/



?>