$('#search').on('submit', function(event) {
    event.preventDefault() // cancels reloading the page so that it can peform the following 

    const name = $('#name').val() // retrieve the value of those with the ID of name, then stores it in the constant as name
    $.ajax('https://api.disneyapi.dev/character?name=' + name).done(function(result) { // use the API to retrieve name and use the input as a query parameter to search for the character. The done method + function  specifies a call back that will executed everytime it's called
        const image = result.data[0].imageUrl
        const name = result.data[0].name
        const films = result.data[0].films

        // FILMS
        let allFilms = "" //  This line initializes an empty string named "allFilms", which will be used to store the names of all films, separated by a comma.
        films.forEach(function(film) { // This line uses a forEach loop to iterate over the "films" constant, and in each iteration, it appends the name of the current film to the "allFilms" string.
            allFilms += `${film}, `
        })
        allFilms = allFilms.substring(0, allFilms.length - 2) // This line removes the last two characters (a comma and a space) from the "allFilms" string, so that it does not end with a comma.

        $('#image').attr('src', image) // This line sets the "src" attribute of an image element with the ID "image" to the "image" constant, so that the character's image is displayed.

        $('#info').empty() // This line removes all content from an element with the ID "info".
        $('#info').append(`<li>Name: ${name}</li>`) // This line appends an HTML list item to the "info" element, displaying the character's name.
        $('#info').append(`<li>Films: ${allFilms}</li>`) // This line appends another HTML list item to the "info" element, displaying the films in which the character appeared.
    })
})