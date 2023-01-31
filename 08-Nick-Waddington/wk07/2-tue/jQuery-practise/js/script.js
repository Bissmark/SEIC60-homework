$('#nameday_search').on('submit', function(event) {
    event.preventDefault();

    $.ajax('https://nameday.abalin.net/api/V1/today').done(function (data) {
        const namedays = data.nameday
        $('.list').remove()
        Object.keys(namedays).forEach(key => {
            $('.nameday').append(`<p class='list'>${key.toUpperCase()}: ${namedays[key]}</p>`)
        });
    });
});

$('#currency_search').on('submit', function(event) {
    event.preventDefault();

    const code = $('#currency_code').val();

    $.ajax(`https://api.frankfurter.app/latest?from=${code}`).done(function (data) {
        const conversion = data.rates

        $('.price').remove()
        Object.keys(conversion).forEach(key => {
            $('.currency').append(`<p class='price'>${key}: ${conversion[key]}</p>`)
        })
    })
})

$('#buzzword_search').on('submit', function(event) {
    event.preventDefault();

    $.ajax('https://corporatebs-generator.sameerkumar.website/').done(function (data) {
        const buzzword = data.phrase
        $('.buzzword_txt').empty().append(`${buzzword}`)
    })
})

$('#dog_search').on('submit', function(event) {
    event.preventDefault();

    $.ajax('https://random.dog/woof.json').done(function (data) {
        const img_url = data.url
        $('#dog').attr('src', img_url);
    })
})

$('#number_search').on('submit', function(event) {
    event.preventDefault();

    $.ajax('http://numbersapi.com/random/trivia?json').done(function (data) {
        $('.number_txt').empty().append(`${data.text}`);
    });
})