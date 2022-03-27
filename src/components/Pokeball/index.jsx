import React, { useState, useEffect } from 'react';
import './index.css'
import Vector from '../SvgIcon/Vector';

const Pokeball = ({ item, setRemovedPokemon }) => {

    const handleOnClick = () => {
        if (item.length != 0 && item !== null) {
            setRemovedPokemon(item)
        }
    }

    return ( 
        <div className="pokeball" onClick={handleOnClick}>
            <Vector color={item?.color}/>
            <img src={item?.sprite} />
        </div>
     );
}
 
export default Pokeball;