import React, { Component } from "react";

class SearchForm extends Component {
    constructor() {
        super();
        this.state = { query: '' }
        this._handleInput = this._handleInput.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleInput(e) {
        this.setState({query: e.target.value})
    }

    _handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <input type="search" onInput={this._handleInput} required placeholder="Sydney" />
                <input type="submit" value="Get Weather" />
            </form>
        );
    }
}

export default SearchForm