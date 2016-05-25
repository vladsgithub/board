<?php

$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));

switch ($method) {
  case 'PUT':
    echo 'PUT: '.$request;
    break;
  case 'POST':
    echo 'POST: '.$_SERVER['PATH_INFO'];
    break;
  case 'GET':
    echo 'GET: '.$_SERVER['REQUEST_URI'];
    break;
  case 'DELETE':
    echo 'DELETE: '.$request;
    break;
  default:
    echo 'default: '.$request;
    break;
}

/* http://php.net/manual/ru/reserved.variables.server.php */
/* http://blog.brunoscopelliti.com/building-a-restful-service-with-angularjs-and-php-backend-setup/ */
?>