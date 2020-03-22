<?php
session_start();

$obj = new stdClass();

try {
    $dsn = 'mysql:host=localhost;dbname=animtrqe_animefood';
    $bdd = new PDO($dsn, 'animtrqe_access', 'Jaimelespates13200@');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage()); // pas sécurisé
}

if(!empty($_GET['recetteId'])) {

    $reponse = $bdd->prepare('SELECT * FROM recette WHERE recette_id = :recetteId');

    $reponse->execute(array(':recetteId' => $_GET['recetteId']));
    $results = $reponse->fetchAll();

    if ($reponse->rowCount() > 0) {
        foreach ($results as $row) {
            $obj->recetteId = $row['recette_id'];
            $obj->name = $row['name'];
            $obj->imageLink = $row['image_link'];
            $obj->origin = $row['origin'];
        }

    }

    $reponse = $bdd->prepare('SELECT * FROM recette_stat WHERE recette_id = :recetteId');

    $reponse->execute(array(':recetteId' => $_GET['recetteId']));
    $results = $reponse->fetchAll();

    if ($reponse->rowCount() > 0) {
        foreach ($results as $row) {
            $obj->difficulty = $row['difficulty'];
            $obj->time = $row['time'];
            $obj->number = $row['number'];
        }

    }

    $reponse = $bdd->prepare('SELECT * FROM recette_ingredients WHERE recette_id = :recetteId');

    $reponse->execute(array(':recetteId' => $_GET['recetteId']));
    $results = $reponse->fetchAll();

    if ($reponse->rowCount() > 0) {
        foreach ($results as $row) {
            $ingredients = array('ingredient' => $row['ingredient_name'], 'quantity' => $row['quantity']);

            $reponseUnit = $bdd->prepare('SELECT * FROM unit WHERE unit_id = :unitId');

            $reponseUnit->execute(array(':unitId' => $row['unit_id']));
            $resultsUnit = $reponseUnit->fetchAll();

            foreach ($resultsUnit as $rowUnit) {
                $ingredients['unit'] = $rowUnit['unit_description'];
            }

            $obj->ingredients[] = $ingredients;
        }
    }

    $reponse = $bdd->prepare('SELECT * FROM recette_instructions WHERE recette_id = :recetteId');

    $reponse->execute(array(':recetteId' => $_GET['recetteId']));
    $results = $reponse->fetchAll();

    if ($reponse->rowCount() > 0) {
        foreach ($results as $row) {
            $obj->instructions[] = $row['instruction'];
        }
    }
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);