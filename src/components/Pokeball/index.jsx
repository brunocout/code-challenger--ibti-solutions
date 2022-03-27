import React, { useState, useEffect } from 'react';
import './index.css'
import Vector from '../SvgIcon/Vector';

const Pokeball = ({ id, setRemovedPokemon }) => {

    const handleOnClick = () => {
        if (id.length != 0 && id !== null) {
            setRemovedPokemon(id)
        }
    }

    return ( 
        <div className="pokeball" onClick={handleOnClick}>
            <Vector color={id?.color}/>
            <img src={id?.sprite} />
        </div>
     );
}
 
export default Pokeball;