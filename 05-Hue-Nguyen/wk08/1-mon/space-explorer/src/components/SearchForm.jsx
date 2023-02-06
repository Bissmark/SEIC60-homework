import React, { useState } from 'react';

export default function SearchForm (props) {
    const [ query, setQuery ] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(query);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder='Free your curiosity' onChange={(event) => setQuery(event.target.value)} />
                <input type="button" value="Search" />
            </form>
        </div>
    )
}
