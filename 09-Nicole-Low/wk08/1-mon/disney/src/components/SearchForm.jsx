import React, {useState} from 'react'

const SearchForm = (props) => {
    const [input, setInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        props.onSubmit(input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder='Donald Duck' required onChange={(event) => setInput(event.target.value)} />
                <input type="submit" value={'Search'} />
            </form>
        </div>
    )
}

export default SearchForm