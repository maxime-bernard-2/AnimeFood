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

                    $.ajax({
                        url: 'model/getReceipe.php',
                        method: 'POST',
                        data: {recetteId: $(this).data('recetteId')}
                    }).done(function (data) {
                        $('#cases').fadeTo("fast" , 0, function() {
                            $('#cases').css('display', 'none');
                            $('#content').append(
                                '<div id="receipe">\n' +
                                    '<div id="imageOrigin">\n' +
                                        '<img src="' + data.imageLink + '">' +
                                        '<p>' + data.origin + ': ' + data.name + '</p>\n' +
                                    '</div>\n' +
                                    '<div id="receipeStat">\n' +
                                        '<p>Difficulté</p>\n' +
                                        '<p>Temps</p>\n' +
                                        '<p>Nb Personnes</p>\n' +
                                    '</div>\n' +
                                    '<div id="receipeIngredients">\n' +
                                        '<p>gghrthrhrhrnnnr</p>\n' +
                                        '<p>gghrthrhrhrnnnr</p>\n' +
                                        '<p>gghrthrhrhrnnnr</p>\n' +
                                    '</div>\n' +
                                    '<div id="receipeInstructions">\n' +
                                        '<p>1. gghrthrhrhrnnnr</p>\n' +
                                        '<p>2. gghrthrhrhrnnnr</p>\n' +
                                        '<p>3. gghrthrhrhrnnnr</p>\n' +
                                    '</div>\n' +
                                '</div>');
                        });
                    }).fail(function () {
                        console.log('Affichage impossible !');
                    });

                })
            } else {
                console.log('Affichage de la recette impossible !');
            }
        }).fail(function () {
            console.error('Une erreur critique est arrivée.');
        });

    });
}) ();