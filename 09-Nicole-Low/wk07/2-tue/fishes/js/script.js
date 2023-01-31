$('#search').on('submit', function(event) {
    event.preventDefault() 

    const name = $('#name').val()
    $.ajax('https://www.fishwatch.gov/api/species/' + name).done(function(result) {
        const image = result[0]["Species Illustration Photo"].src
        const name = result[0]["Species Name"]
        const scientificName = result[0]["Scientific Name"]
        const protein = result[0]["Protein"]
        const fat = result[0]["Fat, Total"]
        const cholesterol = result[0]["Cholesterol"]

        $('#image').attr('src', image)
        $('#info').append(`<li>Name: ${name}</li>`)
        $('#info').append(`<li>Scientific Name: ${scientificName}</li>`)
        $('#info').append(`<li>Protein: ${protein}</li>`)
        $('#info').append(`<li>Fat: ${fat}</li>`)
        $('#info').append(`<li>Cholesterol: ${cholesterol}</li>`)
    })
})