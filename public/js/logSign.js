let logSignStatus = "open";

(function () {
    "use strict";
    $(document).ready(() => {
        console.log("Script actif !");

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