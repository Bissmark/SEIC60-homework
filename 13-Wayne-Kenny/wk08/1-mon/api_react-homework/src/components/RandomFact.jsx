// Import component functionality from react
import React, { Component } from 'react';
// import axios so requests can be made to an API. 
import axios from 'axios';

// create a class that inherits functionality from Component
class RandomFact extends Component {
    constructor() {
        super();
        // set the state to an empty fact
        this.state = {
            fact: ''
        };
        // bind the fetchFact function. requirement when submitting a request
        this._fetchFact = this._fetchFact.bind(this);
    }
    // create the function to pull the data from the API when called
     _fetchFact() {
        axios.get('http://numbersapi.com/random/trivia?json').then((response) => {
            // set the state so that it pulls in data from the API
            this.setState({fact: response.data.text});
        });
    }
    // what gets added to the page
    render() {
        return (
            // add id to div for scss personalisation
            <div id="randNum">
                {/* retrieve fact when button is clicked */}
                <button onClick={ this._fetchFact }>
                    RandomFact
                </button>
                {/* add fact to a paragraph on the page */}
                <p>{ this.state.fact }</p>
            </div>
        );
    }
}
// export function so custom RandomFact tag gets render onto the page with relevant data
export default RandomFact;
