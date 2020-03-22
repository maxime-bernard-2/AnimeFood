<?php
session_start();

$obj = new stdClass();
$obj->success = false;
$obj->message = "Validé !";

try {
    $dsn = 'mysql:host=localhost;dbname=animtrqe_animefood';
    $bdd = new PDO($dsn, 'animtrqe_access', 'Jaimelespates13200@');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage()); // pas sécurisé
}


if(isset($_GET['username'])) {

    $dbReturn = $bdd->prepare("SELECT * FROM user WHERE username = ?");
    $dbReturn->bindParam(1, $_GET['username']);
    $dbReturn->execute();
    $row = $dbReturn->fetch();

    if(empty($row)) {
        if (isset($_GET['email'])) {
            $dbReturn = $bdd->prepare("SELECT * FROM user WHERE email = ?");
            $dbReturn->bindParam(1, $_GET['email']);
            $dbReturn->execute();
            $row = $dbReturn->fetch();

            if(empty($row)) {
                if (isset($_GET['password']) && isset($_GET['rePassword'])) {
                    $password = sha1($_GET['password']);
                    $rePassword = sha1($_GET['rePassword']);

                    if($password == $rePassword) {
                        $reponse = $bdd->prepare('INSERT INTO user(username, email, password)
                                    VALUES (:username, :email, :password)');

                        $reponse->execute(array(':username' => $_GET['username'],
                                                ':email' => $_GET['email'],
                                                ':password' => $password));

                        $obj->success = true;
                    }
                    else {
                        $obj->message = "Mot de passe non identiques";
                    }
                }
            }
            else {
                $obj->message = "Email déjà utilisé";
            }
        }
    }
    else {
        $obj->message = "Nom d'utilisateur déjà utilisé";
    }
}


header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);