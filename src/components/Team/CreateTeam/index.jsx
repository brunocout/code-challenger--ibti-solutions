import React, { useContext } from 'react';
import Pokeball from '../../Pokeball';
import { AppContext } from '../../../hooks/context/Context';
import Edit from '../../SvgIcon/Edit'
import './index.css'

const CreateTeam = ({ className = ''}) => {

    const { id } = useContext(AppContext)

    const position = {
        position: 'absolute'
    }

    return ( 
        <div className={`teams ${className}`}>
            <div className='team-input'>
                <input type="text" placeholder='My Team'/><Edit />
            </div>
            <div className="pokeball-container">
                {id.map(item => <Pokeball item={item} position={position}/>) }
            </div>
        </div>
     );
}
 
export default CreateTeam;