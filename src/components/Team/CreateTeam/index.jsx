import React, { useContext } from 'react';
import Pokeball from '../../Pokeball';
import { AppContext } from '../../../hooks/context/Context';
import Edit from '../../SvgIcon/Edit'
import './index.css'

const CreateTeam = ({ className = ''}) => {

    const { pokemonSlot, addPokemonToRemove, owner, setOwner } = useContext(AppContext)

    const handleOnChange = (e) => {
        const pattern = /[@#$%¨*()&=+^~?/|:;><,!§+``´´"".-]/
        if (!pattern.test(e.target.value)) {
            setOwner(e.target.value)
        } else {
            e.target.value = ''
        }
    }

    return ( 
        <div className={`teams ${className}`}>
            <div className='team-input'>
                <input type="text" placeholder='My Team' onChange={handleOnChange} value={owner} maxLength={20}/><Edit />
            </div>
            <div className="pokeball-container" >
                {pokemonSlot.map(id => <Pokeball pokemonid={id?.id} addPokemonToRemove={addPokemonToRemove} />) }
            </div>
        </div>
     );
}
 
export default CreateTeam;