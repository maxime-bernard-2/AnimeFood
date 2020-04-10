<?php
session_start();

$obj = new stdClass();
$obj->success = false;

try {
    $dsn = 'mysql:host=localhost;dbname=animtrqe_animefood;charset=utf8';
    $bdd = new PDO($dsn, 'animtrqe_access', 'Jaimelespates13200@');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage()); // pas sécurisé
}

if(!empty($_SESSION['user']) && !empty($_GET['recetteId'])) {

    $reponse = $bdd->prepare('SELECT * FROM likeuser WHERE user_id = :userId AND recette_id = :recetteId');

    $reponse->execute(array(':userId' => $_SESSION['user'], ':recetteId' => $_GET['recetteId']));
    $results = $reponse->fetchAll();

    if ($reponse->rowCount() > 0) {
        $obj->like = true;
        $obj->success = true;
    }
    else {
        $obj->like = false;
        $obj->success = true;
    }

}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);