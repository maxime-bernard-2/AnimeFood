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
                });

                $(".case").click(function() {
                    $.ajax({
                        url: 'model/getReceipe.php',
                        method: 'GET',
                        data: {recetteId: $(this).data('recetteId')}

                    }).done(function (data) {
                        $('#cases').fadeOut(100, function () {

                            $.ajax({
                                url: 'view/receipe_view.php',
                            }).done(function(viewdata) {
                                $("#content").append(viewdata);
                                $('#imageOrigin').append('<img src="' + data.imageLink + '">')
                                    .append('<p>' + data.origin + ': ' + data.name + '</p>\n');

                                $('#receipeStat').append('<p>' + data.difficulty + '</p>\n')
                                    .append('<p>' + data.time + '</p>\n')
                                    .append('<p>Personnes: ' + data.number + '</p>\n');

                                if(data.ingredients || data.instructions) {
                                    data.ingredients.forEach(function (row) {
                                        $('#receipeIngredients').append('<p>' + row.ingredient + ': ' + row.quantity + ' ' + row.unit + '</p>');
                                    });

                                    data.instructions.forEach(function (instruction, index) {
                                        $('#receipeInstructions').append('<p>' + (index + 1) + '. ' + instruction + '</p>');
                                    });
                                }

                                $('#back').click(function () {
                                    $('#receipe').fadeOut(100, function () {
                                        $(this).remove();
                                        $('#cases').fadeIn(100);
                                    });
                                });

                                $('#receipe').hide().fadeIn(100);
                            });
                        });

                    }).fail(function () {
                        console.log('Affichage impossible !');
                    });
                });
            } else {
                console.log('Affichage de la recette impossible !');
            }
        }).fail(function () {
            console.error('Une erreur critique est arrivée.');
        });

    });
}) ();