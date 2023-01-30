const fetchBook = function (book) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:Xi Jinping: The Governance of China`);
    xhr.send();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; // too soon!
        }

        const data = JSON.parse( xhr.responseText ); // turn the string into a JS object

        console.log(data);
        const body = document.querySelector('body')
        const title = document.createElement('p');
        const author = document.createElement('p');
        const cover = document.createElement('img')
        title.innerText = data.items[0].volumeInfo.title;
        body.appendChild(title);
        author.innerText = data.items[0].volumeInfo.authors;
        body.appendChild(author);
        cover.src = data.items[0].volumeInfo.imageLinks.smallThumbnail
        body.appendChild(cover);
    };
};

// document.getElementById('fetch').addEventListener('click', fetchBook);
// fetchBook(); // First fact for free

const bookSearch = document.querySelector('#book')
const form = document.querySelector('form')

form.addEventListener("submit", function(event) {
    event.preventDefault();
    fetchBook(book.value)
})