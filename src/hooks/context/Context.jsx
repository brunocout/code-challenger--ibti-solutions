import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext()

export default function Provider({ children }) {

    const [removedPokemon, setRemovedPokemon] = useState('')
    const [pokemons, setPokemons] = useState([])
    const [id, setId] = useState(new Array(6).fill(null))

    const setSlot = (newPokemon) => {
        const newSlots = [...id];
        for (let i = 0; i < newSlots.length; i += 1) {
          const pokemon = newSlots[i];
          if (pokemon) continue;
          newSlots[i] = newPokemon;
          setId(newSlots);
          break;
        }
    }

    const removeFromSlot = () => {
        if (removedPokemon.length != 0 && id !== null) {
            setId(id.map(id => id === removedPokemon ? null : id))
            setRemovedPokemon('')
        }
    } 

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?&limit=5')
        .then(value => value.json())
        .then(data => {
            setPokemons(data.results)
        })
    }, [])

    const values = {
        pokemons,
        setPokemons,
        id,
        setSlot,
        removedPokemon,
        setRemovedPokemon,
        removeFromSlot
    }

    return ( 
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
     );
}

