<?php

ob_start()

?>

    <div id="cases">

        <div class="case">
            <div class="headCase">
                <img class="imgCase" src="./public/image/food.png">
                <p class="txtCase">Flavor of Youth</p>
            </div>
            <p class="titleCase">Soupe aux nouilles de riz</p>
        </div>

        <div class="case">
            <div class="headCase">
                <img class="imgCase" src="./public/image/food2.png">
                <p class="txtCase">Flavor of Youth</p>
            </div>
            <p class="titleCase">Soupe aux nouilles de riz</p>
        </div>

        <div class="case">
            <div class="headCase">
                <img class="imgCase" src="./public/image/food3.jpg">
                <p class="txtCase">Food War</p>
            </div>
            <p class="titleCase">Steak Chaliapin</p>
        </div>

        <div class="case">
            <div class="headCase">
                <img class="imgCase" src="./public/image/food4.gif">
                <p class="txtCase">Food War</p>
            </div>
            <p class="titleCase">Soupe aux nouilles de riz</p>
        </div>

        <div class="case">
            <div class="headCase">
                <img class="imgCase" src="./public/image/food5.jpg">
                <p class="txtCase">Food War</p>
            </div>
            <p class="titleCase">Soupe aux nouilles de riz</p>
        </div>

    </div>

<?php

$content = ob_get_clean();
require 'template.php';
