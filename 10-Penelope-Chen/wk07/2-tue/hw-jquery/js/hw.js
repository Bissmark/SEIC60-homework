$('#search').on('submit', function (event) {
    event.preventDefault();
    const title = $('#title').val();

    let category = 'general'
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/hobbies?category=' + category,
        headers: { 'X-Api-Key': 'FmBS+Uia3qHKniFEsbXCKg==NqGOsDOPhVp91zlE' },
        contentType: 'application/json',
    }).done(function (data) {
        $('#answer').text(data.hobby)
    })
});