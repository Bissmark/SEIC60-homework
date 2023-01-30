
const fetchBook = function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:Jaws');
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4 ) {
            return;
        }

        const data = JSON.parse( xhr.responseText );

        thumbnail = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
        title = data["items"][0]["volumeInfo"]["title"]

        console.log(typeof title)

            const p = document.createElement('p');
            p.innerText = title;
            document.body.appendChild(p)

            const img = document.createElement('img');
            img.src = thumbnail;
            document.body.appendChild(img)
    };
};


document.getElementById('fetch').addEventListener('click', fetchBook);
const form = document.getElementById('form')
