import React, {Component} from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import BookInfo from './BookInfo'

export default class Books extends Component {

    constructor() {
        super()

        this.state = {
            info: {}
        }

        this.fetchData = this.fetchData.bind(this)
    }

    fetchData(input) {
        const booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + input

        axios.get(booksUrl).then((response) => {
            console.log(response.data.items[0].volumeInfo)
            this.setState({info: response.data.items[0].volumeInfo})
        })

    }

    render() {
        return (
            <div>
                <h1>Book Search</h1>
                <SearchForm onSubmit={this.fetchData} />
                <BookInfo info={this.state.info} />
            </div>
        )
    }
}