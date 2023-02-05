// need to wrap this in an event lister and use a anon fn instead
document.getElementById('search').addEventListener('submit', fetchCover())
//
const fetchCover = function () {
    const xhr = new XMLHttpRequest ()
    let x = document.getElementById('input')
    
    console.log('start request')
    console.log(`URL REQUESTED: https://www.googleapis.com/books/v1/volumes?q=title:${searchQuery}`)
    xhr.open ('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${searchQuery}`)
    xhr.send ()
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4){
            console.log('request in progress...')
            return
        }
        const data = JSON.parse(xhr.responseText)
        imgUrl = data.items[0].volumeInfo.imageLinks.thumbnail
        console.log(`request returned: ${typeof imgUrl} ${imgUrl}`) 
        return imgUrl
    }
}
bookImg = fetchCover()
console.log(`BOOKIMG === ${typeof bookImg} ${bookImg}`)
console.log('end script')