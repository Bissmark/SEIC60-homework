import React from 'react'

const CharacterInfo = (props) => {

    return (
        <div>
            <img src={props.info.imageUrl} alt={props.info.name} />
            <h3>{props.info.name}</h3>
        </div>
    )
}

export default CharacterInfo