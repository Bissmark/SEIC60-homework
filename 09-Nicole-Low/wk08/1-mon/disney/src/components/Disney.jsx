import React, {Component} from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import CharacterInfo from './CharacterInfo'


export default class Disney extends Component {

    constructor() {
        super()

        this.state = {
            info: {}
        }

        this.fetchData = this.fetchData.bind(this)
    }

    fetchData(input) {
        const disneyURL = 'https://api.disneyapi.dev/character?name=' + input
        
        axios.get(disneyURL).then((response) => {
            console.log(response.data.data[0])
            this.setState({info: response.data.data[0]})
        })
    }

    render() {
        return (
            <div>
                <h1>Disney Search</h1>
                <SearchForm onSubmit={this.fetchData} />
                <CharacterInfo info={this.state.info} />
            </div>
        )
    }
}