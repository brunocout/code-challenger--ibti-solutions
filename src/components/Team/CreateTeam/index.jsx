import React, { useContext } from 'react';
import Pokeball from '../../Pokeball';
import { AppContext } from '../../../hooks/context/Context';
import Edit from '../../SvgIcon/Edit'
import './index.css'

const CreateTeam = ({ className = ''}) => {

    const { pokemonSlot, addPokemonToRemove, owner, setOwner } = useContext(AppContext)

    return ( 
        <div className={`teams ${className}`}>
            <div className='team-input'>
                <input type="text" placeholder='My Team' onChange={e => setOwner(e.target.value)} value={owner}/><Edit />
            </div>
            <div className="pokeball-container" >
                {pokemonSlot.map(id => <Pokeball pokemonid={id?.id} addPokemonToRemove={addPokemonToRemove} />) }
            </div>
        </div>
     );
}
 
export default CreateTeam;