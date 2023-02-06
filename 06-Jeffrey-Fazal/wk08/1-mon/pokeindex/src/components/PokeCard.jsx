import React, { Component } from 'react';
import axios from 'axios';

class PokeCard extends Component {
    constructor() {
        super();
        this.state = {
            pokeName: '',
            image: '',
            playerOne: [],
            playerTwo: [],
        };
        this.fetchData = this.fetchData.bind(this)
        this.saveCard = this.saveCard.bind(this)
    }

    fetchData() {
        const rand = Math.floor(Math.random() * (150)); 
        const pokeURL = `https://pokeapi.co/api/v2/pokemon/${rand}/` // consider calling rand somewhere else so things appear faster
        axios.get(pokeURL).then((response) => {
            const pokeName = response.data.name; this.setState({pokeName: pokeName});
            const image = response.data.sprites["front_default"]; this.setState({image: image})
            // const moves = response.data?
            console.log(response)
        });
        }
    saveCard() {
        console.log('pokeName::: ' + this.state.pokeName)
    }

    render() {
        return(
            <div className='poke-card'>      
                <p>{this.state.pokeName || 'click draw card'}</p>
                <img src={this.state.image || 'https://i.imgur.com/tY6Qfil.png'} alt={this.state.pokeName}></img>
                <div className='draw'>
                <button type="button" onClick={ this.fetchData }>Draw Card</button>
                </div>
                <div className='controls'>
                <button type="button" onClick={ this.saveCard }>Add to Deck</button> <br />
                <button type="button">View Deck build</button>
                </div>
            </div>
        ); 
    }

}



export default PokeCard;