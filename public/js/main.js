(function () {
    "use strict";
    $(() => {
        console.warn("Script main actif !");

        $.ajax({
            url: 'model/isConnected.php',
            method: 'get'
        }).done(function (data) {
            if (data) {
                $('#log').css('display', 'none');
                $('#sign').css('display', 'none');
            } else {
                $('#deco').css('display', 'none');
            }
        }).fail(function () {
            console.log('Connexion impossible !');
        });

        $.ajax({
            url: 'model/loadMainPage.php',
            method: 'get'
        }).done(function (data) {
            if(data.success === true) {
                data.recette.forEach((item) => {
                    $('#cases').append(
                        $('<div class="case"> ' +
                            '<div class="headCase"> ' +
                                '<img class="imgCase" src="' + item.imageLink + '"> ' +
                                '<p class="txtCase">' + item.origin + '</p> ' +
                            '</div> <p class="titleCase">' + item.name + '</p> ' +
                        '</div>').data('recetteId', item.recetteId));
                })

                $(".case").click(function() {
                    console.log($(this).data('recetteId'));
                })

            } else {
                console.log('oops');
            }
        }).fail(function () {
            console.error('Une erreur critique est arrivée.');
        });

    });
}) ();