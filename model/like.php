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

if(!empty($_GET['recetteId']) && !empty($_SESSION['user'])) {

    $reponse = $bdd->prepare('SELECT * FROM likeuser WHERE user_id = :userId AND recette_id = :recetteId');

    $reponse->execute(array(':userId' => $_SESSION['user'], ':recetteId' => $_GET['recetteId']));
    $results = $reponse->fetchAll();

    if ($reponse->rowCount() > 0) {
        $reponse = $bdd->prepare('DELETE FROM likeuser WHERE user_id = :userId AND recette_id = :recetteId');

        $reponse->execute(array(':userId' => $_SESSION['user'], ':recetteId' => $_GET['recetteId']));

        $obj->message = 'Like supprimé';
        $obj->state = 'notlike';
        $obj->success = true;
    }
    else {
        $reponse = $bdd->prepare('INSERT INTO likeuser (`user_id`, `recette_id`) VALUES (:userId, :recetteId)');

        $reponse->bindParam(':userId', $_SESSION['user']);
        $reponse->bindParam(':recetteId', $_GET['recetteId']);

        $reponse->execute();

        $obj->message = 'Like ajouté';
        $obj->state = 'like';
        $obj->success = true;
    }
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);