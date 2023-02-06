// const fetchFact = function () {
//     $.ajax('http://numbersapi.com/random/trivia?json').done(function (result) {
//         $('body').append(`<p>${ result.text }</p>`);
//     });
// }

// $('#fetch').on('click', fetchFact);


import React, { Component } from 'react';
import axios from 'axios';

class RandomFact extends Component {
    constructor() {
        super();
        this.state = {
            fact: ''
        };
        this._fetchFact = this._fetchFact.bind(this);
    }

     _fetchFact() {
        axios.get('http://numbersapi.com/random/trivia?json').then((response) => {
            this.setState({fact: response.data.text});
        });
    }

    render() {
        return (
            <div id="randNum">
                <button onClick={ this._fetchFact }>
                    RandomFact
                </button>
                <p>{ this.state.fact }</p>
            </div>
        );
    }
}

export default RandomFact;
