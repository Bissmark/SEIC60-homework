import React, { useState } from 'react';

const SearchForm = function (props) {
    const [query, setQuery] = useState('');

    const _handleSearch = function (e) {
        e.preventDefault();
        props.onSubmit(query);
    };
    
    const optionList = [mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts];

    return (
        <form onSubmit = { _handleSearch }>
            <input type="search" options = {optionList} placeholder = 'shooter' onChange ={(e)=> setQuery(e.target.value)}/>
            <input type="submit" value = {`Search for ${ query }`} />
        </form>
    );
};

export default SearchForm;