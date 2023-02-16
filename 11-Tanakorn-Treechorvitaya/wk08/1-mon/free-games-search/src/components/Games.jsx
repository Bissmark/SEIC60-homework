import React from 'react';

const Games = function (props) {
    return (
        <div>
            { props.images.map((url) => <img src = {url} key = {url} />) }
        </div>
    )
}

export default Games;