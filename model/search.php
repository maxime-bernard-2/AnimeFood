<?php
session_start();

$idUser = 0;

$obj = new stdClass();
$obj->success = false;
$obj->message = "C'est pas bon";

try {
    $dsn = 'mysql:host=localhost;dbname=animtrqe_animefood;charset=utf8';
    $bdd = new PDO($dsn, 'animtrqe_access', 'Jaimelespates13200@');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage()); // pas sécurisé
}

if(!empty($_GET['value'])) {
    $reponse = $bdd->prepare('SELECT * FROM recette WHERE name LIKE CONCAT(\'%\',:name,\'%\')');

    $reponse->execute(array(':name' => $_GET['value']));
    $results = $reponse->fetchAll();

    if ($reponse->rowCount() > 0) {
        $obj->success =true;

        foreach ($results as $row) {
            $recette = new class {};

            $recette->recetteId = $row['recette_id'];
            $recette->name = $row['name'];
            $recette->imageLink = $row['image_link'];
            $recette->origin = $row['origin'];

            $obj->recette[] = $recette;
        }
    }
}
else {
    $reponse = $bdd->prepare('SELECT * FROM recette');

    $reponse->execute();
    $results = $reponse->fetchAll();

    if ($reponse->rowCount() > 0) {
        $obj->success =true;

        foreach ($results as $row) {
            $recette = new class {};

            $recette->recetteId = $row['recette_id'];
            $recette->name = $row['name'];
            $recette->imageLink = $row['image_link'];
            $recette->origin = $row['origin'];

            $obj->recette[] = $recette;
        }
    }
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);