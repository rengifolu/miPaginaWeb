<?php include_once("index.html");

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

echo $nombre. "ha dicho:<br/>".mensaje;

if (mail('andrelujan7@gmail.com', $nombre,$email,$mensaje)) {
    # code...
    echo "ok";
} else {
    # code...
    echo "no ok";
}


?>
