function initCases() {
    $.ajax({
        url: 'model/loadMainPage.php'
    }).done(function (data) {
        if(data.success === true) {

            showCases(data);

        } else {
            console.log('Affichage de la recette impossible !');
        }
    }).fail(function () {
        console.error('Une erreur critique est arrivée.');
    });
}

function showCases(data) {

    data.recette.forEach((item) => {
        $('#cases').append(
            $('<div class="case"> ' +
                '<div class="headCase" id="receipe' + item.recetteId + '"> ' +
                '<img class="imgCase" src="' + item.imageLink + '"> ' +
                '<p class="txtCase">' + item.origin + '</p> ' +
                '</div> <p class="titleCase">' + item.name + '</p> ' +
                '</div>').data('recetteId', item.recetteId)
                .css('opacity', 0)
        );

        likeCaseChecker(item.recetteId);

    });

    // Execute cases apparition animation
    $('.case').each($).wait(100, function (index) {
        this.animate({
            opacity: 1
        }, 100);
    });

    // When user click on a case
    showReceipe();

}