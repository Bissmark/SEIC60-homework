import React, {useState} from 'react'; 

const SearchForm = function (props) {
    const[query, setQuery] = useState('');

    const _handleSubmit = function (e) {
        e.preventDefault();
        props.onSubmit(query);
    };

    return (
        <form onSubmit={_handleSubmit}>
            <input type="search" placeholder="bloody mary" onChange={ (e) => setQuery(e.target.value) } />
            <input type="submit" value={`Search for ${query}`} />
        </form>
    );
};

export default SearchForm;