import React, { useContext, useState } from 'react';
import { AppContext } from '../../hooks/context/Context';
import Pokemon from '../Pokemon'
import './index.css'

const Pokedex = () => {

    const { pokemons } = useContext(AppContext)
    const [count, setCount] = useState(0)

    return ( 
        <div className="pokedex-container">
            <h1>Choose 6 pokémons:</h1>
            <div className="pokemons">
                {pokemons.map(items => <Pokemon items={items} setCount={setCount} id={pokemons.indexOf(items) + 1} count={count}/>)}
                <li className='sentinel' />
            </div>
        </div>
     );
}
 
export default Pokedex;