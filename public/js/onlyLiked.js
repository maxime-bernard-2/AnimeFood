function showOnlyLiked(checkbox) {
    if(checkbox.checked) {
        $('#searchBar').prop('disabled', true);
        $.ajax({
            url: 'model/onlyLiked.php',
            method: 'get'
        }).done((data) => {
            if(data.success) {
                $('.case').remove();

                showCases(data);

            }
            else {
                console.log('Pas d\'elements like');
            }
        })
    }
    else {
        $('.case').remove();
        $('#searchBar').prop('disabled', false);
        initCases()
    }

}