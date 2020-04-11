function likeCaseChecker(receipeId) {
    $.ajax({
        url: 'model/likeCheck.php',
        method: 'get',
        data: {
            recetteId: receipeId
        }
    }).done(function (data) {
        if(data.success) {
            if(data.like) {
                $('#receipe' + receipeId).append('<img class="likeCase" src="public/image/like.png">')
            }
            else {
                $('#receipe' + receipeId).append('<img class="likeCase" src="public/image/notlike.png">')
            }
        }
    }).fail(function () {
        console.log('Attribution des likes a echoué !');
    });
}

function likeReceipeChecker(data) {
    $.ajax({
        url: 'model/likeCheck.php',
        method: 'get',
        data: {
            recetteId: data.recetteId
        }
    }).done(function (data) {
        if(data.success) {
            if(data.like) {
                $('#likeButton').attr('src', 'public/image/like.png');
            }
            else {
                $('#likeButton').attr('src', 'public/image/notlike.png');
            }
        }
    }).fail(function () {
        console.log('Attribution des likes a echoué !');
    });
}

function likeOrNot(data) {
    $('#likeButton').click(() => {
        $.ajax({
            url: 'model/like.php',
            method: 'get',
            data: {
                recetteId: data.recetteId
            }
        }).done(function (data) {
            if(data.state == 'like') {
                $('#likeButton').attr('src', 'public/image/like.png');
            }
            else if(data.state == 'notlike') {
                $('#likeButton').attr('src', 'public/image/notlike.png');
            }
        }).fail(function () {
            console.log('Like impossible !');
        });
    })
}