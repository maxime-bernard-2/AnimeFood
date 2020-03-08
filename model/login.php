<?php
session_start();

$idUser = 0;

$obj = new stdClass();
$obj->success = false;
$obj->message = "Mauvais identifiant ou mot de passe";

/*
 * Normalement code qui verifie si :
 * - $_POST['username']
 * - $_POST['password']
 * sont ok
 */

try {
    $dsn = 'mysql:host=localhost;dbname=animefood';
    $bdd = new PDO($dsn, 'root');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage()); // pas sécurisé
}

if(!empty($_POST['username']) && !empty($_POST['password'])) {

    $reponse = $bdd->prepare('SELECT * FROM user WHERE username = :username AND password = :password');

    $reponse->execute(array(':username' => $_POST['username'], ':password' => $_POST['password']));
    $results = $reponse->fetchAll();

    if ($reponse->rowCount() > 0) {
        $obj->success =true;

        foreach ($results as $rows) {
            $_SESSION['user'] = $rows["user_id"];
        }
    }
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);