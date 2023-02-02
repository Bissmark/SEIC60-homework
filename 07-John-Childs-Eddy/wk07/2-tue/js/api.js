$('#form').on('submit', function(event) {
    event.preventDefault();
    $.ajax('https://api.coingecko.com/api/v3/search/trending').done(function(data) {
    
        for ( let i = 0; i < data.coins.length; i++ ) {
            $('#form').append(`<h1>Coin Name: ${ data.coins[i].item.name }</h1>`)
            $('#form').append(`<h3>Market Cap Rank: ${ data.coins[i].item.market_cap_rank }</h3>`)
            $('#form').append(`<h3>Price in BTC: ${ data.coins[i].item.price_btc }</h3>`)
            const $image = $('<img>').attr('src', data.coins[i].item.large);
            $('#form').append($image)
        };
    });
});

// $('search').on('submit', function(event) {
//     event.preventDefault();
//     const title = $('title').val();
//     $.ajax('https://api.coingecko.com/api/v3/search/trending' + title).done(function(data) {
//         const result = data.items[0].volumeInfo.imageLinks.thumbnail;
//         $('result').attr('src', result);
//     });
// });