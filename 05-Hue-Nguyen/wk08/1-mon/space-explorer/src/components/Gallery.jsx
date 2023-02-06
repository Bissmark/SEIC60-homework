import React from "react";

export default function Gallery(props) {
    console.log(props.items[0]);
    const items = [];
    props.items.forEach((item, index) => {
        items.push(
            <Item
                item={item}
                key={index}
            />
        );
    })

    const itemsStyle = {
        display: 'flex',
        flexWrap: 'wrap',
    };

    return (
        <div>
            <h1>Gallery</h1>
            <div style={ itemsStyle }>
                {items}
            </div>
        </div>
    )
}

function Item({ item }) {
    const links = item.links;
    let imageLink = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'
    if (links) {
        imageLink = item.links[0].href;
    }

    const itemStyle = {
        width: '400px',
        marginLeft: '10px',
        textAlign: 'center',
    };

    const imageStyle = {
        opacity: 1,
        width: '400px',
        aspectRatio: '1/1',
        objectFit: 'cover',
    };


    const titleStyle = {
        fontWeight: 'bold',
    }

    return (
        <div style={ itemStyle }>
            <img src={imageLink} alt={item.title} style={imageStyle} />
            <div className="content">
                <p style={ titleStyle }>{item.data[0].title}</p>
                <p>Created at: {item.data[0].date_created}</p>
                {/* <p>Description: {item.data[0].description}</p> */}
            </div>
        </div>
    )
}
