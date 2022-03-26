import React, { useState, useEffect } from 'react';
import './index.css'
import Vector from '../SvgIcon/Vector';

const Pokeball = ({ item, position }) => {
    const [color, setColor] = useState()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${item}`).then(value => value.json())
        .then(json => {
            setPokemon(json.sprites.front_default)
            setColor(json.types[0].type.name)
        })
    }, [item])

    return ( 
        <div className="pokeball">
            <Vector style={position} color={color}/>
            <img src={pokemon} />
        </div>
     );
}
 
export default Pokeball;