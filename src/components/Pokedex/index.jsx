import React, { useContext } from 'react';
import { AppContext } from '../../hooks/context/Context';
import Pokemon from '../Pokemon'
import './index.css'

const Pokedex = () => {

    const { pokemons } = useContext(AppContext)

    return ( 
        <div className="pokedex-container">
            <h1>Choose 6 pokémons:</h1>
            <div className="pokemons">
                {pokemons.map(items => <Pokemon items={items}/>)}
            </div>
        </div>
     );
}
 
export default Pokedex;