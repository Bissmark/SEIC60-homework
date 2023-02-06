// import useState functionality
import React, { useState } from 'react';
// import axios so requests can be made to an API. This replaces AJAX
import axios from 'axios';

const Library = () => {

    // create useState to retrieve search input and use it to find relevant book data
    const [query, setQuery] = useState('');
    // set book cover value (what I will use to add book cover to image) and set input value (where I will retrieve the data from)
    const [bookCover, setBookCover] = useState('');
    // do the same for author and description as I have for book cover 
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    // Book search function that uses async and wait to ensure that the page only renders after the serach finishes
    const _searchBook = async (e) => {
        e.preventDefault();
        // Data variable which can be recalled when i want addiitional book data such as cover and author. query from useState is used to pull in the search parameters
        const {data} = await axios.get('https://www.googleapis.com/books/v1/volumes?q=title:' + query)
        // 'GET' book cover
        setBookCover(data.items[0].volumeInfo.imageLinks.thumbnail);
        // 'GET' Author
        setAuthor(data.items[0].volumeInfo.authors);
        // 'GET' book description
        setDescription(data.items[0].volumeInfo.description);
        // console.log(data) // use to see how to access relevent data
    };

    return (
        <div id="books">
            {/* run the searchbook function when the submit button is clicked */}
            <form onSubmit={ _searchBook }>
                <label>
                    Book title:
                    <input 
                    type="search" 
                    placeholder="Jaws" 
                    autoFocus
                    required
                    onChange={ (e) => setQuery(e.target.value) }/>
                    <input type="submit" value={ `Search`} />
                </label>
            </form>
            {/* add an image tag to the page with the relevant book cover */}
            <img src={ bookCover } />
            {/* add a heading (h1) with the author of the book */}
            <h1>Author: { author }</h1>
            {/* add a heading (h4) and paragraph (p) for the description of the book. Use the same id to format together*/}
            <h4 id="des">Description</h4>
            <p id="des">{ description }</p>
        </div>

    );
};
// Export data to custom Library tag in APP.js to render on the page
export default Library;