const fetchCover = function () {
    const xhr = new XMLHttpRequest ()
    searchQuery = document.getElementById('input')
    if (searchQuery = null) {
        searchQuery = 'jaws'
    }
    console.log('start request')
    console.log(`https://www.googleapis.com/books/v1/volumes?q=title:${searchQuery}`)
    xhr.open ('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${searchQuery}`)
    xhr.send ()
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4){
            console.log('request in progress...')
            return
        }
        const data = JSON.parse(xhr.responseText)
        imgUrl = data.items[0].volumeInfo.imageLinks.thumbnail
        console.log(` request returned: ${imgUrl}`) 

    }
}

fetchCover();