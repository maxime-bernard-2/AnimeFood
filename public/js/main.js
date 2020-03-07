(function () {
    "use strict";
    $(document).ready(() => {
        console.warn("Script main actif !");

        $(".case").click(function() {

            $("#cases").fadeTo('fast', 0, function() {
                console.log("End Fading !!!");
                $("#content").load("view/receipe_vue.php");
            });
        })

    });
}) ();