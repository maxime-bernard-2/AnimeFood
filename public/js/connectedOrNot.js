function checkUserConnection(arg) {
    $.ajax({
        url: 'model/isConnected.php',
        method: 'get'
    }).done(function (data) {
        if(arg == 'initPage') {
            if (data) {
                $('#log').css('display', 'none');
                $('#sign').css('display', 'none');
                $('#deco').css('display', 'flex');
                $('.liked').css('display', 'block');
            } else {
                $('#log').css('display', 'flex');
                $('#sign').css('display', 'flex');
                $('#deco').css('display', 'none');
                $('.liked').css('display', 'none');
            }
        }
        else if(arg == 'receipeCheck') {
            if (data) {
                $('#likeButton').css('display', 'flex');
            }
            else {
                $('#likeButton').css('display', 'none');
            }
        }
    }).fail(function () {
        console.log('Connexion impossible !');
    });
}