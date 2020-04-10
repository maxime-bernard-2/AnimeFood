function showReceipe() {
    $(".case").click(function() {
        // Init the main page with cases
        $.ajax({
            url: 'model/getReceipe.php',
            method: 'GET',
            data: {
                recetteId: $(this).data('recetteId')
            }
        }).done(function (data) {
            $('#cases').fadeOut(100, function () {

                $.ajax({
                    url: 'view/receipe_view.php',
                }).done(function(viewdata) {
                    $("#content").append(viewdata);
                    $('#imageOrigin').append('<img src="' + data.imageLink + '">')
                        .append('<p>' + data.origin + ': ' + data.name + '</p>\n');

                    $('#receipeStat').append($('<p class="stat">' + data.difficulty + '</p>\n').css('opacity', 0))
                        .append($('<p class="stat">' + data.time + '</p>\n').css('opacity', 0))
                        .append($('<p class="stat">Personnes: ' + data.number + '</p>\n').css('opacity', 0));

                    $('.stat').each($).wait(0, function (index) {
                        this.animate({
                            opacity: 1
                        }, 400);
                    });

                    if(data.ingredients || data.instructions) {
                        data.ingredients.forEach(function (row) {
                            if(row.quantity == 0) {
                                $('#receipeIngredients').append($('<p class="ingredient">' + row.ingredient + '</p>')
                                    .css('opacity', 0)
                                );
                            }
                            else {
                                $('#receipeIngredients').append($('<p class="ingredient">' + row.ingredient + ': ' + row.quantity + ' ' + row.unit + '</p>')
                                    .css('opacity', 0)
                                );
                            }
                        });

                        $('.ingredient').each($).wait(100, function (index) {
                            this.animate({
                                opacity: 1
                            }, 100);
                        });

                        data.instructions.forEach(function (instruction, index) {
                            $('#receipeInstructions').append($('<p class="instruction">' + (index + 1) + '. ' + instruction + '</p>')
                                .css('opacity', 0)
                            );
                        });

                        $('.instruction').each($).wait(100, function (index) {
                            this.animate({
                                opacity: 1
                            }, 100);
                        });
                    }

                    checkUserConnection('receipeCheck');

                    likeReceipeChecker(data);

                    likeOrNot(data);

                    $('#backButton').click(function () {
                        $('#receipe').fadeOut(100, function () {
                            $(this).remove();
                            $(".likeCase").remove();
                            $('.case').each((index) => {
                                let thiscase = $('.case')[index];
                                likeCaseChecker($(thiscase).data('recetteId'));
                            })

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
}