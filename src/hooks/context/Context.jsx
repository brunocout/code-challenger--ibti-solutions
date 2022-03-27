import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext()

export default function Provider({ children }) {

    const [removedPokemon, setRemovedPokemon] = useState('')
    const [removedId, setRemovedId] = useState()
    const [pokemons, setPokemons] = useState([])
    const [pokemonSlot, setPokemonSlot] = useState(new Array(6).fill(null))

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

    const removeFromSlot = () => {
        if (removedPokemon.length != 0 && pokemonSlot !== null) {
            setPokemonSlot(pokemonSlot.map(id => id === removedPokemon ? null + setRemovedId(id.id) : id))
            console.log(removedId)
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
        pokemonSlot,
        setSlot,
        removedPokemon,
        setRemovedPokemon,
        removeFromSlot,
        removedId
    }

    return ( 
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
     );
}

