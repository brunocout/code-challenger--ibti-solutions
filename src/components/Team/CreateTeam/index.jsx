import React, { useContext } from 'react';
import Pokeball from '../../Pokeball';
import { AppContext } from '../../../hooks/context/Context';
import Edit from '../../SvgIcon/Edit'
import './index.css'

const CreateTeam = ({ className = ''}) => {

    const { pokemonSlot, setRemovedPokemon, setResetSlot } = useContext(AppContext)

    return ( 
        <div className={`teams ${className}`}>
            <div className='team-input'>
                <input type="text" placeholder='My Team'/><Edit />
            </div>
            <div className="pokeball-container" >
                {pokemonSlot.map(item => <Pokeball item={item} setRemovedPokemon={setRemovedPokemon} setResetSlot={setResetSlot}/>) }
            </div>
        </div>
     );
}
 
export default CreateTeam;