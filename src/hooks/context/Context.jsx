import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext()

export default function Provider({ children }) {

    const [removedPokemon, setRemovedPokemon] = useState('')
    const [removedId, setRemovedId] = useState()
    const [pokemons, setPokemons] = useState([])
    const [pokemonSlot, setPokemonSlot] = useState(new Array(6).fill(null))
    const [owner, setOwner] = useState('')
    const [resetSlot, setResetSlot] = useState('')
    const [reload, setReload] = useState(false)
    const pokeball = document.querySelectorAll('.pokeball')

    // First fetch of pokemons
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(value => value.json())
        .then(data => {
            setPokemons(data.results)
        })
    }, [])

    // Set Pokemons to specific slot
    const setSlot = (newPokemon) => {
        const newSlots = [...pokemonSlot];
        for (let i = 0; i < newSlots.length; i += 1) {
          const pokemon = newSlots[i];
          if (pokemon) continue;
            newSlots[i] = newPokemon;
            setPokemonSlot(newSlots);
            setRemovedId('')
          break;
        }
    }

    // Adding pokemons that will be removed
    const addPokemonToRemove = (toRemove, select, setPokemonDet) => {
        setRemovedPokemon(toRemove)
        setResetSlot({setPokemonDet})
        for (let i = 0; i < pokeball.length; i++) {
            pokeball[i].classList.add('isGray')
        }
        select.classList.remove('isGray')
        
    }

    // Highlighting specific pokemon
    useEffect(() => {
        for (let i = 0; i < pokeball.length; i++) {
            if (removedPokemon.length == 0) {
                pokeball[i].classList.remove('isGray')
            }
        }
    }, [removedPokemon])

    // Removing specific pokemon from slot
    const removeFromSlot = () => {
        if (removedPokemon.length != 0 && pokemonSlot !== null) {
            setPokemonSlot(pokemonSlot.map(id => id?.id === removedPokemon ? null + setRemovedId(id.id) : id))
            setRemovedPokemon('')
            resetSlot.setPokemonDet('')
        }
    }

    // Add team on database
    const createTeam = () => {
        // if (owner.length != 0) {
            // postTeam()
            if (!reload) {
                setReload(true) 
            } else {
                setReload(false)
            }
            setPokemonSlot(pokemonSlot.map(id => id?.id === removedPokemon ? setRemovedId(id.id) : id))
            setOwner('')
            setPokemonSlot(new Array(6).fill(null))
        // }
    }

    const postTeam = () => {
        fetch("https://code-challenge--ibti-solutions.herokuapp.com/teams", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                pokemonid: pokemonSlot.map(id => id.id),
                owner: owner
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    const values = {
        pokemons,
        setPokemons,
        pokemonSlot,
        setSlot,
        removedPokemon,
        addPokemonToRemove,
        removeFromSlot,
        removedId,
        createTeam,
        owner,
        setOwner,
        reload
    }

    return ( 
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
     );
}

