import React, { Component } from 'react';

// Functional components behave just like render
const Recipe = function (props) {
    console.log(props)
    return ( 
        <div>
            <h1>{props.recipe.name}</h1>
            <ul>
                {props.recipe.ingredients.map((i) => <li>{i}</li>)}
            </ul>
            <p>{props.recipe.instructions}</p>
        </div>
    );
}

export default Recipe;