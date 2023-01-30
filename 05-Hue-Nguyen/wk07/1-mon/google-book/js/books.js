const fetchData = function () {
    // search
    const searchInput = document.getElementById('search-key');
    const key = searchInput.value;
    console.log(key);

    // results block
    const results = document.querySelector('.results');

    // book title
    const bookTitle = document.createElement('h2');

    // cover image
    const coverImage = document.createElement('img');

    // waiting message
    const waiting = document.createElement('p');
    waiting.innerHTML = 'It may take a while...';

    results.appendChild(waiting);
    results.appendChild(bookTitle);
    results.appendChild(coverImage);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${key}`, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return
        }
        // once the response is ready
        // hide the waiting message
        waiting.style.display = 'none';

        // and, clear the input
        searchInput.value = '';

        const data = JSON.parse(xhr.responseText);
        // console.log(data);
        // console.log(data.items[0].volumeInfo.title);
        // console.log(data.items[0].volumeInfo.imageLinks.thumbnail);

        // show the cover iamge
        coverImage.src = data.items[0].volumeInfo.imageLinks.thumbnail;

        // show the book title
        bookTitle.innerText = data.items[0].volumeInfo.title;
    };
}

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', fetchData);
