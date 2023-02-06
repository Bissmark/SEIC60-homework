import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Gallery from './Gallery';

class SpaceImageSearch extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        };

        this.fetchImages = this.fetchImages.bind(this);
    }

    fetchImages(q) {
        console.log('fetchImages')
        const nasaURL = `https://images-api.nasa.gov/search?q=${q}`
        axios.get(nasaURL).then(response => {
            console.log(response);
            this.setState({items: response.data.collection.items})
        })
    };

    render() {
        return (
            <div>
                <SearchForm onSubmit={this.fetchImages} />
                <Gallery items={this.state.items} />
            </div>
        )
    }
};

export default SpaceImageSearch;
