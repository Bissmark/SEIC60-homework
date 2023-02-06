import React from 'react'

const CharacterInfo = (props) => {
    if (!props.info.name) return ''
    
    return(
        <div>
            <img src={props.info.image} alt={props.info.name} />
            <h3>{props.info.name}</h3>
            <ul>
                <li>Gender: {props.info.gender}</li>
                <li>Species: {props.info.species}</li>
                <li>Location: {props.info.location.name}</li>
                <li>Origin: {props.info.origin.name}</li>
                <li>Status: {props.info.status}</li>
            </ul>
        </div>
    )
}

export default CharacterInfo
