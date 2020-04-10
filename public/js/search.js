function showResult(value) {
    $.ajax({
        url: 'model/search.php',
        method: 'get',
        data: {
            value: value
        }
    }).done((data) => {
        if(data.success == true) {
            $('.case').remove();

            showCases(data);

        }
    })
}