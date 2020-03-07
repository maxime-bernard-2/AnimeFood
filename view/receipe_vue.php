<?php

ob_start()

?>

    <div id="receipe">
        <div id="imageOrigin">
            <img src="public/image/food.jpg">
            <p>Food War</p>
        </div>

        <div id="receipeStat">
            <p>Difficulté</p>
            <p>Temps</p>
            <p>Nb Personnes</p>
        </div>

        <div id="receipIngredient">
            <p>gghrthrhrhrnnnr</p>
            <p>gghrthrhrhrnnnr</p>
            <p>gghrthrhrhrnnnr</p>
        </div>

        <div id="receipeInstructions">
            <p>1. gghrthrhrhrnnnr</p>
            <p>2. gghrthrhrhrnnnr</p>
            <p>3. gghrthrhrhrnnnr</p>
        </div>
    </div>

<?php

$content = ob_get_clean();
require 'template.php';
