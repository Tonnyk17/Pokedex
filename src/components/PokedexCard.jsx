import React from "react";
import "../assets/styles/components/PokedexCard.css";

const PokedexCard = ({ pokemon, movements }) => {
    const { name, sprites } = pokemon

    return (
        <>
            <div className="pokedex-main-container">
                <h3 className="pokedex-card-name">{name}</h3>
                <div className="pokedex-card-container">
                    <img src={sprites.front_default} alt={name} className="pokedex-card-image" />
                    <div className="pokedex-card-movements">
                        <ul className="card-movements-list">
                            {movements === undefined ? null
                                : movements.moves.map(item =>
                                    <li className="card-movements-item">{item.name}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokedexCard;