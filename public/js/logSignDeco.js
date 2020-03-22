let logSignStatus = "open";

(function () {
    "use strict";
    $(() => {
        console.warn("Script logSignDeco actif !");

        $("#log").click(function() {
            if(logSignStatus === "open") {
                logSignStatus = "close";
                $("#logSign").css("right", "0");
                $("#logFormDiv").css("display", "block");
            }
            else {
                logSignStatus = "open";
                $(".message").text('');
                $("#logSign").css("right", "-18rem");
                $("#logFormDiv").css("display", "none");
                $("#signFormDiv").css("display", "none");
            }
        });

        $("#sign").click(function() {
            if(logSignStatus === "open") {
                logSignStatus = "close";
                $("#logSign").css("right", "0");
                $("#signFormDiv").css("display", "block");
            }
            else {
                logSignStatus = "open";
                $(".message").text('');
                $("#logSign").css("right", "-18rem");
                $("#formContent").remove();
                $("#signFormDiv").css("display", "none");
                $("#logFormDiv").css("display", "none");
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

        $('.form').submit(function () {
            $.ajax({
                url : $(this).attr('action'),
                method : $(this).attr('method'),
                data : $(this).serialize()
            }).done(function (data) {
                if(data.success === true) {
                    window.location.href = 'index.php';
                } else {
                    $('.message').text(data.message);
                }
            }).fail(function () {
                console.error('Une erreur critique est arrivée.');
            });
            return false;
        });

    });
}) ();