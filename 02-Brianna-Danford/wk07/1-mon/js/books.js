const fetchFact = function () {
    const xhr = new XMLHttpRequest();
    const title = document.querySelector('#title').value
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`);
    xhr.send(); 

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        const data = JSON.parse( xhr.responseText );
        console.log(data);
        const p = document.createElement('img');
        p.src = data.items[0].volumeInfo.imageLinks.thumbnail;
        document.body.appendChild(p);
    };
};
document.getElementById('fetch').addEventListener('click', fetchFact);
// fetchFact();
// If i want author or any other info: change title to author, change p.src = data.items[0].volumeInfo.author[0]