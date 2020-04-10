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

$reponse = $bdd->prepare('SELECT * FROM likeuser WHERE user_id = :userId');

$reponse->execute(array(':userId' => $_SESSION['user']));
$results = $reponse->fetchAll();

if ($reponse->rowCount() > 0) {

    foreach ($results as $row) {

        $reponse2 = $bdd->prepare('SELECT * FROM recette WHERE recette_id = :recetteId');

        $reponse2->execute(array(':recetteId' => $row['recette_id']));
        $results2 = $reponse2->fetchAll();

        if ($reponse2->rowCount() > 0) {
            $obj->success =true;

            foreach ($results2 as $row2) {
                $recette = new class {};

                $recette->recetteId = $row2['recette_id'];
                $recette->name = $row2['name'];
                $recette->imageLink = $row2['image_link'];
                $recette->origin = $row2['origin'];

                $obj->recette[] = $recette;
            }
        }
    }
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);