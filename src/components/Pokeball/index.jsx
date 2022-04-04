import React, { useState, useEffect } from 'react';
import './index.css'
import Vector from '../SvgIcon/Vector';

const Pokeball = ({ pokemonid, addPokemonToRemove }) => {

    const [pokemonDet, setPokemonDet] = useState([])

    useEffect(() => {
        if (pokemonid != undefined) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
            .then(res => res.json())
            .then(data => {
                setPokemonDet({
                    sprite: data.sprites.front_default,
                    color: data.types[0].type.name
                })
            })
        }
    }, [pokemonid])
    
    const handleOnClick = (e) => {
        const pokeball = e.target.closest('.pokeball')
        if (pokemonid.length != 0 && pokemonid !== null) {
            addPokemonToRemove(pokemonid, pokeball, setPokemonDet)
        }
    }

    return ( 
        <div className="pokeball" onClick={typeof addPokemonToRemove === 'function' ? handleOnClick : null}>
            <Vector color={pokemonDet?.color}/>
            <img src={pokemonDet?.sprite} />
        </div>
     );
}
 
export default Pokeball;