import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import List from './List';


class CurrencyConverter extends Component {

    constructor() {
        super();
        this.state = {
            rates: []
        };
        this.fetchRates = this.fetchRates.bind(this)
    }

    fetchRates(q) {
        const currencyURL = `https://api.frankfurter.app/latest?from= ${ q }`
        const currencyParams = q;

    // const generateURL = function (p) {
    //     return [
    //         currencyURL,

    //     ]
    // }

    axios.get(currencyURL, { params: currencyParams}).then((response) => {
        const rates = response.data.rates
        this.setState({rates: rates});
    });
}

    render() {
        return(
            <div>
                <h1>Currency Converter</h1>
                <SearchForm onSubmit={ this.fetchRates }/>
                <List rates={ this.state.rates }/>
            </div>
        );
    }
}

export default CurrencyConverter;