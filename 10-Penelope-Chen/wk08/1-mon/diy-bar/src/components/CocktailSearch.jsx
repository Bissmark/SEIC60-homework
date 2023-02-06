import React, { Component, useEffect } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Recipe from './Recipe';

class CocktailSearch extends Component {
    constructor() {
        super();
        this.state = {
            recipe: {}
        };
        this.fetchImages = this.fetchImages.bind(this);
    }

    fetchImages(q) {
        console.log('searching for', q);

        const cocktailURL = 'https://api.api-ninjas.com/v1/cocktail';
        const cocktailParams = {
            method: 'GET',
            name: q,
            format: 'application/json',
            nojsoncallback: 1
        };
        const headers = {'X-Api-Key': 'FmBS+Uia3qHKniFEsbXCKg==NqGOsDOPhVp91zlE'}

        axios(cocktailURL, { params: cocktailParams, headers: headers}).then((response) => {
            console.log(response);
            this.setState({recipe: response.data[0]})
        });
    }

    render() {
        return (
            <div>
                <h1>Cocktail Recipe Search</h1>
                <SearchForm onSubmit={ this.fetchImages } />
                <Recipe recipe={ this.state.recipe } />
            </div>
        );
    }
}

export default CocktailSearch;