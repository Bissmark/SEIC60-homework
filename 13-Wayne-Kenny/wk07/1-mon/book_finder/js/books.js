// Create the function so it can be called multiple times
const fetchBook = function () {

    // grab the input details from the search
    const title = document.getElementById('title').value

    // State 0 - get the object
    const xhr = new XMLHttpRequest(); 
    console.log(xhr)
    // State 1 - open the request and include book title
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`) 

    // State 2 - send the request
    xhr.send()
    
    // create function to pull required data from google books API
    xhr.onreadystatechange = function () {

        // set it to only run the function once it hits stage 4
        if (xhr.readyState !== 4) {
            return;
        }
        
        // convert from JSON into a string
        const data = JSON.parse( xhr.responseText );
        
        // access the object to see where book details are found
        console.log(data)

        // access all book info through Google books API
        const book = data.items[0].volumeInfo

        // access the img in dom and add the book cover
        const img = document.getElementById('cover');
        img.src = book.imageLinks.thumbnail;

        // create a h2 in dom and append the book title
        const bookTitle = document.createElement('h2');
        bookTitle.innerText = book.title;
        document.body.appendChild(bookTitle)

        // create a h2 in dom and append the book author
        const bookAuthor = document.createElement('h2');
        bookAuthor.innerText = data.authors;
        document.body.appendChild(bookAuthor)
    };

};

// access the dom and add an event listener to the button. When it is clicked it should run the function to retrieve book details
document.getElementById('btn').addEventListener('click', fetchBook);
