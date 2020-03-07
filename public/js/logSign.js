let logSignStatus = "open";

(function () {
    "use strict";
    $(document).ready(() => {
        console.warn("Script logSign actif !");

        $("#log").click(function() {
            if(logSignStatus === "open") {
                logSignStatus = "close";
                $("#logSign").css("right", "0");
            }
            else {
                logSignStatus = "open";
                $("#logSign").css("right", "-18rem");
            }
        })

    });
}) ();