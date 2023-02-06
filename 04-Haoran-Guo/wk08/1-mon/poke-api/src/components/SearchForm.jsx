import React,{ useState } from "react";

const SearchForm = (props) => {
    const [search, setSearch] = useState("");
    const _handleSubmit = (e) => {
        e.preventDefault();
        console.log("Search result from Search Form handleSubmit function", search);
        props.onSubmit(search); // this line of code sends the data from the child back to the parent
    }

    return(
        <form onSubmit={ _handleSubmit }>
            <input type="search" placeholder="pokemon" 
            onChange={(e)=>{setSearch(e.target.value)}}
            />
            <input type="submit" value={`Search for ${ search }`} />

        </form>
    )
}

export default SearchForm;

