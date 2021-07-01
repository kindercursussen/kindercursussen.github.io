<?php
    //DataBase Connection
    $conn = new mysqli('localhost','root','Martijn12', 'db_kindercursussen');
    if($conn->connect_error) {
        die('Connection failed: ' .$conn->connect_error);
    }

?>