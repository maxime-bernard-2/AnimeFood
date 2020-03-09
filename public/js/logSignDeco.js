let logSignStatus = "open";

(function () {
    "use strict";
    $(() => {
        console.warn("Script logSignDeco actif !");

        $("#log").click(function() {
            if(logSignStatus === "open") {
                logSignStatus = "close";
                $("#logSign").css("right", "0");
            }
            else {
                logSignStatus = "open";
                $("#logSign").css("right", "-18rem");
            }
        });

        $("#deco").click(function() {
            $.ajax({
                url: 'model/logout.php',
            }).done(function (data) {
                window.location.href = './';
                console.log('Deconnexion réussie !')
            }).fail(function () {
                console.log('Deconnexion impossible !');
            });
        });

        $('#logForm').submit(function () {
            let self = $(this);
            $.ajax({
                url : $(this).attr('action'),
                method : $(this).attr('method'),
                data : $(this).serialize()
            }).done(function (data) {
                if(data.success === true) {
                    window.location.href = 'index.php';
                } else {
                    $('#message').text(data.message);
                }
            }).fail(function () {
                console.error('Une erreur critique est arrivée.');
            });
            return false;
        });

    });
}) ();