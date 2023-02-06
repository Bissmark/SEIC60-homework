import React, { useState } from 'react';
import axios from 'axios';

const Library = () => {
    const [bookCover, setBookCover] = useState('');
    const [query, setQuery] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    // const [bookCover, setBookCover] = useState('');

    const _searchBook = async (e) => {
        e.preventDefault();
        const {data} = await axios.get('https://www.googleapis.com/books/v1/volumes?q=title:' + query)
        setBookCover(data.items[0].volumeInfo.imageLinks.thumbnail);
        setAuthor(data.items[0].volumeInfo.authors);
        setDescription(data.items[0].volumeInfo.description);
        // setBookCover(data.items[0].volumeInfo.imageLinks.thumbnail);
        console.log(data)
    };

    return (
        <div id="books">
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
            <img src={ bookCover } />
            <h1>Author: { author }</h1>
            <h4 id="des">Description</h4>
            <p id="des">{ description }</p>
        </div>

    );
};

export default Library;