import React from 'react';
import Pokeball from '../../Pokeball';
import './index.css'

const MyTeam = ({ className = '', data }) => {

    return ( 
        <div className={`teams ${className}`}>
            <h1>{data.owner}'s Team</h1>
            <div className="pokeball-container">{data.pokemonid.map(id => <Pokeball pokemonid={id}/>)}</div>
        </div>
     );
}
 
export default MyTeam;