import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import CreateTeam from '../../components/Team/CreateTeam';
import Pokedex from '../../components/Pokedex';
import cbutton from '../../assets/svg/cbutton.svg'
import dbutton from '../../assets/svg/dbutton.svg'
import './index.css'
import { AppContext } from '../../hooks/context/Context';

const Create = () => {

    const { removeFromSlot, removedPokemon, createTeam, pokemonSlot, pokemons, setPokemons } = useContext(AppContext)

    // Infinite Scroll in Pokedex
    useEffect(() => {
        const sentinel = document.querySelector('.sentinel')
        const isObserver = new IntersectionObserver(entries => {  
            if(entries.some(entry => entry.isIntersecting)) {
                requestMorePokemons()
            }
        })

        if (sentinel != null) {
            isObserver.observe(sentinel)
        }
        
        return () => isObserver.disconnect()
    }, [pokemons])

    const requestMorePokemons = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pokemons.length}&limit=20`)
        .then(value => value.json())
        .then(data => {
            setPokemons([...pokemons, ...data.results])
        })
    }

    const buttonOp = {
        opacity: 0.3
    }

    return ( 
        <div className="create-container">
            <Header title='teams' href='/code-challenger--ibti-solutions/'/>
            <div className='main-create'>
                <CreateTeam />
                <div className='button-container'>
                    <button style={removedPokemon.length == 0 ? buttonOp : null} onClick={removeFromSlot}>
                        <img src={dbutton} width={50}/>
                    </button>
                    <button style={pokemonSlot.slice(5)[0]?.id === undefined ? buttonOp : null} onClick={createTeam}>
                        <img src={cbutton} width={50}/>
                    </button>
                </div>
                <Pokedex/>
            </div>
        </div>
     );
}
 
export default Create;