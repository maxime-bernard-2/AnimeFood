<?php

ob_start()

?>

    <div id="cases">


    </div>

<?php

$content = ob_get_clean();
require 'template.php';
