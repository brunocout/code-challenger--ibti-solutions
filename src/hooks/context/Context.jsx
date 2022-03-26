import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext()

export default function Provider({ children }) {

    const [pokemons, setPokemons] = useState([])
    const [id, setId] = useState(new Array(6).fill(null))


    function setSlot(newPokemon) {
        const newSlots = [...id];
        for (let i = 0; i < newSlots.length; i += 1) {
          const pokemon = newSlots[i];
          if (pokemon) continue;
          newSlots[i] = newPokemon;
          setId(newSlots);
          break;
        }
    }

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?&limit=200')
        .then(value => value.json())
        .then(data => {
            setPokemons(data.results)
        })
    }, [])

    const values = {
        pokemons,
        setPokemons,
        id,
        setSlot
    }

    return ( 
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
     );
}

