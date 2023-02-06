import React, {Component} from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import CharacterInfo from './CharacterInfo'

export default class RickMorty extends Component {
    constructor() {
        super()

        this.state = {
            info: {}
        }

        this.fetchData = this.fetchData.bind(this)
    }

    fetchData(input) {
        const rickMortyURL = 'https://rickandmortyapi.com/api/character/?name=' + input

        axios.get(rickMortyURL).then((response) => {
            this.setState({info: response.data.results[0]})
            console.log(response.data.results[0])
        })
    }

    render() {
        return (
            <div>
                <h1>Rick and Morty Search</h1>
                <SearchForm onSubmit={this.fetchData} />
                <CharacterInfo info={this.state.info} />
            </div>
        )
    }
}