(function () {
    "use strict";
    $(document).ready(() => {
        console.warn("Script main actif !");

        $.ajax({
            url: 'model/isConnected.php',
            method: 'get'
        }).done(function (data) {
            if (data) {
                $('#log').css('display', 'none');
                $('#sign').css('display', 'none');
                // $('.buttonHeader').remove();
                // $('#buttonsHeader').append('<p class="buttonHeader" id="deco">LogOut</p>')
            } else {
                $('#deco').css('display', 'none');
            }
        }).fail(function () {
            console.log('Connexion impossible !');
        });

        $(".case").click(function() {

            $("#cases").fadeTo('fast', 0, function() {
                console.log("End Fading !!!");
                $("#content").load("view/receipe_vue.php");
            });
        })

    });
}) ();