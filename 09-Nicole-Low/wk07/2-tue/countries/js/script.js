$('#search').on('submit', function(event) {
    event.preventDefault()

    const country = $('#country').val()

    $.ajax(`https://restcountries.com/v3.1/name/${country}`).done(function(result) {
        const image = result[0].flags.png
        const name = result[0].name.official
        const capital = result[0].capital[0]
        const continent = result[0].continents[0]
        const population = result[0].population

        $('#image').attr('src', image)

        $('#info').empty()
        $('#info').append(`<li>Name: ${name}</li>`)
        $('#info').append(`<li>Capital: ${capital}</li>`)
        $('#info').append(`<li>Continent: ${continent}</li>`)
        $('#info').append(`<li>Population: ${population}</li>`)

    })
})