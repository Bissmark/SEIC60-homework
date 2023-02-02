const titleSearch = function () {
    const title = document.getElementById('query').value
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + title );
    xhr.send(); // This line is asynchronous

    xhr.onreadystatechange = function () {
        if ( xhr.readyState !== 4 ) {
            return; // less than 4 is too soon!
        }

        const data = JSON.parse( xhr.responseText ); // Turn the string into a JSON object using .parse
        // console.log(data)
        
        const p = document.createElement('IMG');
        p.src = data.items[0].volumeInfo.imageLinks.thumbnail; // .text is the key for the data object which returns the value for the text key.
        document.body.appendChild(p);
    };
};