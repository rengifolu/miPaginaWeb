<?php include_once("index.html");

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// echo $nombre. " ha dicho:<br/>".mensaje;

if (mail('andrelujan7@gmail.com', $nombre,$mensaje)) {
    # code...
    // echo "alert('ok')";
    echo '<script type="text/javascript" alert("ok")></script>';
} else {
    # code...
    // echo "alert('no ok')";
    echo '<script type="text/javascript" alert("no ok")></script>';
}


?>
