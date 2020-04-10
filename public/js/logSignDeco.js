let logSignStatus = "open";

(function () {
    "use strict";
    $(() => {
        console.warn("Script logSignDeco actif !");


        // When user click on LogIn button
        $("#log").click(function() {
            // If panel is open close it and hide the LogIn form
            if(logSignStatus === "open") {
                logSignStatus = "close";
                $("#logSign").css("right", "0");
                $("#logFormDiv").css("display", "block");
            }
            // Else open it and show the LogIn form
            else {
                logSignStatus = "open";
                $(".message").text('');
                $("#logSign").css("right", "-18rem");
                $("#logFormDiv").css("display", "none");
                $("#signFormDiv").css("display", "none");
            }
        });

        // When user click on SignIn button
        $("#sign").click(function() {
            // If panel is open close it and hide the SignIn form
            if(logSignStatus === "open") {
                logSignStatus = "close";
                $("#logSign").css("right", "0");
                $("#signFormDiv").css("display", "block");
            }
            // Else open it and show the SignIn form
            else {
                logSignStatus = "open";
                $(".message").text('');
                $("#logSign").css("right", "-18rem");
                $("#signFormDiv").css("display", "none");
                $("#logFormDiv").css("display", "none");
            }
        });

        // When user click on LogOut button
        $("#deco").click(function() {
            // Erase session
            $.ajax({
                url: 'model/logout.php',
            }).done(function (data) {
                window.location.href = './';
            }).fail(function () {
                console.log('Deconnexion impossible !');
            });
        });

        // When user send the LogIn or SignIn form
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