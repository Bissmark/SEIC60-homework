import React, {useState} from 'react'

const SearchForm = (props) => {
    const [input, setInput] = useState('')

    const handleInput = (event) => {
        event.preventDefault()
        props.onSubmit(input)
    }

    return (
        <div>
            <form onSubmit={handleInput}>
                <input type="search" placeholder='Rick' required onChange={(event) => setInput(event.target.value)} />
                <input type="submit" value='Search' />
            </form>
        </div>
    )
}

export default SearchForm