import React, { useState, useContext, useEffect } from 'react';
import Header from '../../components/Header';
import CreateTeam from '../../components/Team/CreateTeam';
import Pokedex from '../../components/Pokedex';
import cbutton from '../../assets/svg/cbutton.svg'
import dbutton from '../../assets/svg/dbutton.svg'
import './index.css'

const Create = () => {

    const buttonOp = {
        opacity: 0.3
    }

    return ( 
        <div className="create-container">
            <Header title='teams' href='/'/>
            <div className='main-create'>
                <CreateTeam />
                <div className='button-container'>
                    <button style={buttonOp}><img src={cbutton} width={50}/></button>
                    <button style={buttonOp}><img src={dbutton} width={50}/></button>
                </div>
                <Pokedex/>
            </div>
        </div>
     );
}
 
export default Create;