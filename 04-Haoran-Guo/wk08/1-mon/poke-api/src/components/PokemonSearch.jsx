import React, {Component} from "react";
import SearchForm from "./SearchForm";
import PokemonList from "./PokemonList";
import axios from "axios";


class PokemonSearch extends Component {
    // store the data from axios 
    constructor(){
        super();
        this.state = {
            abilities: [],
            name: ""
        };
        this.fetchData = this.fetchData.bind(this);
    }


    fetchData(q){
        console.log("fetchData function from the parent: ", q);
        const pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${q}`;  
        axios.get(pokemonAPI).then((response) => {
            console.log(response.data)
            this.setState({abilities: response.data.abilities, name: response.data.name})
        })
    }

    render() {
        return(
            <div>
                <h1>Pokemon Search</h1> 
                <SearchForm onSubmit={ this.fetchData } />
                <PokemonList name={ this.state.name} abilities={ this.state.abilities }/>
            </div>
        );  
    };


}

export default PokemonSearch;