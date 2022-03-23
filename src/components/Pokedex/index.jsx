import React from 'react';
import Pokemon from '../Pokemon';
import './index.css'

const Pokedex = () => {
    return ( 
        <div className="pokedex-container">
            <h1>Choose 6 pokémons:</h1>
            <div className="pokemons">
                <Pokemon />
            </div>
        </div>
     );
}
 
export default Pokedex;