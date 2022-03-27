import React, { useContext } from 'react';
import Header from '../../components/Header';
import CreateTeam from '../../components/Team/CreateTeam';
import Pokedex from '../../components/Pokedex';
import cbutton from '../../assets/svg/cbutton.svg'
import dbutton from '../../assets/svg/dbutton.svg'
import './index.css'
import { AppContext } from '../../hooks/context/Context';

const Create = () => {

    const { removeFromSlot, removedPokemon } = useContext(AppContext)

    const buttonOp = {
        opacity: 0.3
    }

    return ( 
        <div className="create-container">
            <Header title='teams' href='/'/>
            <div className='main-create'>
                <CreateTeam />
                <div className='button-container'>
                    <button style={removedPokemon.length == 0 ? buttonOp : null} onClick={removeFromSlot}><img src={dbutton} width={50}/></button>
                    <button style={buttonOp}><img src={cbutton} width={50}/></button>
                </div>
                <Pokedex/>
            </div>
        </div>
     );
}
 
export default Create;