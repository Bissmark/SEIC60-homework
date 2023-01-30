const fetchData = function() {

    const xhr = new XMLHttpRequest()

    const userInput = document.getElementById('book-title').value
    // const query = userInput.split(' ').join('+')

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${userInput}`)
    xhr.send()

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
            return
        }

        const book = JSON.parse(xhr.responseText)
        
        const image = book['items'][0]['volumeInfo']['imageLinks']['thumbnail']
        const title = book['items'][0]['volumeInfo']['title']
        const publishedDate = book['items'][0]['volumeInfo']['publishedDate']
        const language = book['items'][0]['volumeInfo']['language']

        // AUTHOR
        const book_author = book['items'][0]['volumeInfo']['authors']
        let author = ""
        book_author.forEach(function(each_author) {
            author += `${each_author}, `
        })
        author = author.substring(0, author.length - 2)

        const div = document.createElement('div')
        const img = document.createElement('img')
        img.src = image
        div.appendChild(img)

        const ul = document.createElement('ul')
        const liTitle = document.createElement('li')
        const liAuthor = document.createElement('li')
        const liPublishedDate = document.createElement('li')
        const liLanguage = document.createElement('li')

        liTitle.innerText = `Title: ${title}`
        liAuthor.innerText = `Author: ${author}`
        liPublishedDate.innerText = `Published Date: ${publishedDate}`
        liLanguage.innerText = `Language: ${language}`

        ul.appendChild(liTitle)
        ul.appendChild(liAuthor)
        ul.appendChild(liPublishedDate)
        ul.appendChild(liLanguage)

        const resultDiv = document.createElement('div')
        resultDiv.setAttribute('id', 'result-container')
        resultDiv.appendChild(div)
        resultDiv.append(ul)

        document.body.appendChild(resultDiv)

        console.log(book)
    }
}

document.querySelector('#search-btn').addEventListener('click', fetchData)

