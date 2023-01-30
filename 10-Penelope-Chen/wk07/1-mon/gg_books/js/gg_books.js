const fetchCover = function () {
    const xhr = new XMLHttpRequest(); 
        xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:Jaws?json');
        xhr.send(); 

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
            return;
        }
            const data = JSON.parse( xhr.responseText ); // turn the string into a JS object

            console.log(data);

            let img = document.createElement('img');
            img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
            document.body.appendChild(img)

            console.log(img)
        }
}

document.getElementById('fetch').addEventListener('click', fetchCover);
fetchCover(); // First book cover for free