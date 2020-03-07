<?php

require "./controler/mainPage_contoler.php";

if(isset($_GET['action'])) {
    if($_GET['action'] == "receipe") {
        receipePage();
    }
}
else {
    mainPage();
}



