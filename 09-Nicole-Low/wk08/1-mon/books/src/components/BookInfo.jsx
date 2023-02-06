import React from 'react'

const BookInfo = (props) => {
    if (!props.info.imageLinks) return '';
    return (
        <div>
            <img src={props.info.imageLinks.thumbnail} alt={props.info.title} />
            <h3>{props.info.title}</h3>
            <ul>
                <li>Author: {props.info.authors[0]}</li>
                <li>Published date: {props.info.publishedDate}</li>
                <li>Page count: {props.info.pageCount}</li>
                <li>Language: {props.info.language}</li>
                <li>Average rating: {props.info.averageRating}</li>
            </ul>
        </div>
    )
}

export default BookInfo