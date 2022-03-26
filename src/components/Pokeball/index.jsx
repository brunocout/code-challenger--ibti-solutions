import React, { useState, useEffect } from 'react';
import './index.css'
import Vector from '../SvgIcon/Vector';

const Pokeball = ({ id, position, setRemovedPokemon }) => {
    const [color, setColor] = useState()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(value => value.json())
        .then(json => {
            setPokemon(json.sprites.front_default)
            setColor(json.types[0].type.name)
        })
    }, [id])

    const handleOnClick = () => {
        if (id !== null) {
            setRemovedPokemon(id)
        }
    }

    return ( 
        <div className="pokeball" onClick={handleOnClick}>
            <Vector style={position} color={color}/>
            <img src={pokemon} />
        </div>
     );
}
 
export default Pokeball;