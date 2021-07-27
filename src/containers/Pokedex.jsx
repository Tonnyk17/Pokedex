import React, { useEffect, useState } from 'react';
import PokedexCard from '../components/PokedexCard';
import "../assets/styles/containers/Pokedex.css";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const API = "https://pokedex-6a2d8-default-rtdb.firebaseio.com/.json";
        fetch(API)
            .then(response => response.json())
            .then(data => Object.values(data))
            .then(pokemon => setPokemons(pokemon))
            .catch(error => console.error(error));

    }, [])

    return (
        <>
            <h1 className="pokedex-title">My Pokedex</h1>
            <div className="pokedex-container">
                {pokemons.map(item => <PokedexCard pokemon={item.pokemon} movements={item.favorite_moves} />)}
            </div>
        </>
    )
}

export default Pokedex;