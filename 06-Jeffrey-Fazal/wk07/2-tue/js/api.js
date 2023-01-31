const fetchFood = function () {
    $.ajax('https://biriyani.anoram.com/get').done(function (result) {
        $('#food').attr('src',result.image)
    });
};

// $('#get-food').on('click', fetchFood);
fetchFood(); // First food for free

// const getBrewery = function() {
//     $.ajax('https://api.openbrewerydb.org/breweries').done
// }