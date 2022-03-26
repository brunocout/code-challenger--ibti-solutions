import React from 'react';
import Pokeball from '../../Pokeball';
import './index.css'

const MyTeam = ({ className = '' }) => {
    return ( 
        <div className={`teams ${className}`}>
            <h1>My Team</h1>
            <div className='left'>
                <Pokeball fill='white'/>
                <Pokeball fill='white'/>
                <Pokeball fill='white'/>
            </div>
            <div className='right'>
                <Pokeball fill='white'/>
                <Pokeball fill='white'/>
                <Pokeball fill='white'/>
            </div>
        </div>
     );
}
 
export default MyTeam;