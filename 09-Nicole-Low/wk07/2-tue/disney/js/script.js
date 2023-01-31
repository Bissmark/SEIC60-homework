$('#search').on('submit', function(event) {
    event.preventDefault()

    const name = $('#name').val()
    $.ajax('https://api.disneyapi.dev/character?name=' + name).done(function(result) {
        const image = result.data[0].imageUrl
        const name = result.data[0].name
        const films = result.data[0].films
        const enemies = result.data[0].enemies

        // FILMS
        let allFilms = ""
        films.forEach(function(film) {
            allFilms += `${film}, `
        })
        allFilms = allFilms.substring(0, allFilms.length - 2)

        $('#image').attr('src', image)

        $('#info').empty()
        $('#info').append(`<li>Name: ${name}</li>`)
        $('#info').append(`<li>Films: ${allFilms}</li>`)
    })
})