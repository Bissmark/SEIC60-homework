import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Games from './Games';

// https://www.freetogame.com/api-doc

class GamesSearch extends Component {
    constructor() {
        super();
        this.state = {
            images: [],
            query: ''
        }
        this.fetchImages = this.fetchImages.bind(this);
    }

    fetchImages(q) {
        const flickrURL = "https://www.freetogame.com/api/games?";
        const flickrParams = {
            category : q,
        };
        const generateURL = function(p){
            return p.thumbnail
        };
        axios.get(flickrURL, { params: flickrParams}).then((response)=>{
            console.log(response.data);
            const images = response.data.map(generateURL);
            console.log(images);
            this.setState({images: images})
        })
    }
    render() {
        return (
            <div>
                <h1>Game Search</h1>
                <SearchForm onSubmit={ this.fetchImages } />
                <Games images={ this.state.images } />
            </div>
        )
    }
}

export default GamesSearch