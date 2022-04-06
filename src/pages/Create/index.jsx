import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import CreateTeam from '../../components/Team/CreateTeam';
import Pokedex from '../../components/Pokedex';
import cbutton from '../../assets/svg/cbutton.svg'
import dbutton from '../../assets/svg/dbutton.svg'
import './index.css'
import { AppContext } from '../../hooks/context/Context';
import Modal from '../../components/Modal';

const Create = () => {

    const { removeFromSlot, removedPokemon, createTeam, pokemonSlot, pokemons, setPokemons, owner } = useContext(AppContext)
    const [message, setMessage] = useState({
        isVisible: false,
        type: null,
        message: ''
    })
    

    const buttonOp = {
        opacity: 0.3
    }

    // Calling create team function and set message success or warning
    const handleOnClick = () => {
        if (owner.length != 0) {
            createTeam()
            setMessage({
                isVisible: true,
                type: 'success',
                msg: "Team created successfully!"
            })
            setTimeout(() => {
                setMessage({
                    isVisible: false
                })
            }, 1500);
        } else {
            setMessage({
                isVisible: true,
                type: 'warning',
                msg: "Oh! something went wrong, please try again."
            })
            setTimeout(() => {
                setMessage({
                    isVisible: false
                })
            }, 1500);
        }
    }

    // Infinite Scroll in Pokedex
    useEffect(() => {
        const sentinel = document.querySelector('.sentinel')
        const isObserver = new IntersectionObserver(entries => {  
            if(entries.some(entry => entry.isIntersecting)) {
                requestMorePokemons()
            }
        })

        isObserver.observe(sentinel)
        
        return () => isObserver.disconnect()
    }, [pokemons])

    const requestMorePokemons = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pokemons.length}&limit=20`)
        .then(value => value.json())
        .then(data => {
            setPokemons([...pokemons, ...data.results])
        })
    }

    return ( 
        <div className="create-container">
            {message.isVisible && <Modal message={message.msg} type={message.type} />}
            <Header title='teams' href='/code-challenger--ibti-solutions/'/>
            <div className='main-create'>
                <CreateTeam />
                <div className='button-container'>
                    <button style={removedPokemon.length == 0 ? buttonOp : null} onClick={removeFromSlot}>
                        <img src={dbutton} width={50}/>
                    </button>
                    <button style={pokemonSlot.slice(5)[0]?.id === undefined ? buttonOp : null} onClick={handleOnClick}>
                        <img src={cbutton} width={50}/>
                    </button>
                </div>
                <Pokedex/>
            </div>
        </div>
     );
}
 
export default Create;