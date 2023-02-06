import React,{ Component } from "react";

class PokemonList extends Component{
    
    render(){
        console.log('props in pokemonlist:', this.props);

        return(
            <div>
                abilities: 
                    <ol>
                     {this.props.abilities.map((a)=><li>{a.ability.name}</li>)}
                    </ol>
                    
                <p>pokemon name: { this.props.name } </p>
            </div>
        )
    }
}

export default PokemonList;