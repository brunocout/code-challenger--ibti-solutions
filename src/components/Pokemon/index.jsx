import React,{ useState, useEffect, useContext } from 'react';
import './index.css'
import { AppContext } from '../../hooks/context/Context';
import cbutton from '../../assets/svg/cbutton.svg'

const Pokemon = ({ items, count, setCount, id}) => {

    // States of pokemons
    const { setSlot, removedId, reload } = useContext(AppContext)
    const [pokemonSprite, setPokemonSprite] = useState([])
    const [upperCaseName, setUpperCaseName] = useState([])
    const [pokemon, setPokemon] = useState({
        id: '',
        color: '',
        sprite: ''
    })
    const [type, setType] = useState({
        type1: '',
        type2: ''
    })
    const [selected, setSelected] = useState(false)

    // Set specific pokemon to slot
    const handleOnClick = () => {
        setSlot(pokemon)
        if (count < 6) {
            setSelected(true)
            setCount(count + 1) 
        }
    }

    // Fetching pokemon data
    useEffect(() => {
        fetch(`${items.url}`)
        .then(value => value.json())
        .then(data => {
            setPokemonSprite(data.sprites.front_default)
            setType({
                type1: data.types[0]?.type.name,
                type2: data.types[1]?.type.name
            })
            setPokemon({
                id: data.id,
                color: data.types[0]?.type.name,
                sprite: data.sprites.front_default
            })
            setUpperCaseName(data.name[0].toUpperCase() + data.name.slice(1))
        })
    }, [])

    // Removing selection
    useEffect(() => {
        if (removedId === pokemon.id && count > 0) {
            setSelected(false)
            setCount(count - 1)
        }
    }, [removedId])

    useEffect(() => {
        setSelected(false)
        setCount(count - count)
    }, [reload])

    return ( 
        <div className="pokemon" onClick={handleOnClick}>
            <div className='pokemon-id'>
                <p>#{id}</p>
            </div>
            <div className="pokemon-sprite">
                {selected && <img src={cbutton} className="selected"/>}
                <img src={pokemonSprite}/>
            </div>
            <div className="pokemon-info">
                <h1>{upperCaseName}</h1>
                <div className='pokemon-types'>
                    <span className={`type1 ${type.type1}`} ></span>
                    <span className={`type2 ${type.type2}`} ></span>
                </div>
            </div>
        </div>
     );
}
 
export default Pokemon;