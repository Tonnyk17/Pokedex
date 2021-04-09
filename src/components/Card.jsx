import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/Appcontext";
import "../assets/styles/components/Card.css";

const Card = ({ pokeInfo }) => {
    const { selection } = useContext(AppContext);
    const [pokemon, setPokemon] = useState({});

    
    useEffect(() => {
        fetch(pokeInfo.url)
        .then(response => response.json())
        .then(data => setPokemon(data))
        
    },[pokeInfo])
        
    const handleSelect = () => {
        selection(pokemon); 
    }
    const isNull = Object.keys(pokemon).length > 0;
    
    return(
        <>  
            {isNull ? 
                <div className="card">
                <h4 className="card-title">{pokeInfo.name = pokeInfo.name.toUpperCase()}</h4>
                <img 
                    src={pokemon.sprites.front_default} 
                    alt={pokeInfo.name} 
                    className="card-image"
                    width="100px" height="100px"/>
                <div className="card-button" onClick={handleSelect}>Seleccionar</div>
            </div>
            :
            <div className="card">
                <h4 className="card-title">{pokeInfo.name}</h4>
                <img 
                src="https://i.postimg.cc/qRhb4PN6/poke.png" 
                alt={pokeInfo.name} 
                className="card-image"
                width="100px" height="100px"/>
                <div className="card-button" onClick={handleSelect}>Seleccionar</div>
            </div>
            }
        </>
    );
}

export default Card;