import React from 'react';
import './index.css'
import Vector from '../SvgIcon/Vector';

const Pokeball = ({ item, addPokemonToRemove }) => {
    
    const handleOnClick = (e) => {
        const pokeball = e.target.closest('.pokeball')
        if (item.length != 0 && item !== null) {
            addPokemonToRemove(item, pokeball)
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