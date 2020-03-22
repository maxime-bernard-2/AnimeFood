<?php
session_start();

$obj = new stdClass();
$obj->success = false;

try {
    $dsn = 'mysql:host=localhost;dbname=animtrqe_animefood';
    $bdd = new PDO($dsn, 'root');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

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

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);