import React,{ useState, useEffect, useContext } from 'react';
import './index.css'
import { AppContext } from '../../hooks/context/Context';

const Pokemon = ({ items }) => {


    const { setSlot } = useContext(AppContext)
    const [pokemonSprite, setPokemonSprite] = useState([])
    const [upperCaseName, setUpperCaseName] = useState([])
    const [pokemonId, setPokemonId] = useState()
    const [type, setType] = useState({
        type1: '',
        type2: ''
    })

    const handleOnClick = () => {
        setSlot(pokemonId)
    }

    useEffect(() => {
        fetch(`${items.url}`)
        .then(value => value.json())
        .then(data => {
            setPokemonSprite(data.sprites.front_default)
            setType({
                type1: data.types[0]?.type.name,
                type2: data.types[1]?.type.name
            })
            setPokemonId(data.id)
            setUpperCaseName(data.name[0].toUpperCase() + data.name.slice(1))
        })
    }, [])

    
    

    return ( 
        <div className="pokemon" onClick={handleOnClick}>
            <div className='pokemon-id'>#{pokemonId}</div>
            <div className="pokemon-sprite">
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