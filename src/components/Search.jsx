import React, { useContext } from "react";
import "../assets/styles/components/Search.css"
import AppContext from "../context/Appcontext";
import ListMovements from "./ListMovements";
import Moves from "./Moves";

const Search = () => {
    
    const { selected,search,movements, removeMovements} = useContext(AppContext);
    const isEmpty = Object.keys(selected).length > 0;
   
    const handleSearch = (e)=>{
        e.preventDefault();
       
        const { pokeSearch } = e.target.elements;
        const pokeName = pokeSearch.value.toLowerCase();
                
        search(pokeName);
        removeMovements();
        
    }
    const handleAddFavorites = () => {

            fetch("https://api-pokemon-16fa6-default-rtdb.firebaseio.com/.json",{
                method : 'POST',
                body: JSON.stringify({
                    "pokemon" : selected,
                    "favorite_moves": movements
                }),
                headers :{
                    "Content-type" : "application/json"
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))

    }
  
    
    return(
        <>
            <div className="main-search-container">
            {isEmpty ? 
                    <div className="main-card">
                        <div className="main-card-info">
                            <h3 className="main-pokemon-id">#{selected.id}</h3>
                            
                            <img 
                                src={selected.sprites.front_default}
                                alt={selected.name} 
                                className="main-pokemon-image"
                                width="100px" height="100px"
                            />
                            <h3 className="main-pokemon-name">{selected.name = selected.name.toUpperCase()}</h3>
                            <ul className="pokemon-stats-list">
                                {selected.stats.map(item => (
                                    <li className="main-pokemon-stats">
                                        <h5 className="pokemon-stats-name">
                                        {item.stat.name = item.stat.name.toUpperCase()}:
                                        </h5>
                                        <p className="stats-points">{item.base_stat}pts</p> 
                                    </li>
                                ))
                                }
                            </ul>
                            <div className="movements-selected">
                            {movements.moves.map(item => (
                                <Moves move={item}/>
                
                            ))

                            }
                            </div>
                        </div>
                        <div className="movements-container">
                            <h3 className="movements-title">Movimientos</h3>
                                <small className="movements-select-text">Selecciona maximo 4</small>
                                <div className="movements-list">
                                  {selected.moves.map(item => (
                                      <ListMovements moves={item.move} key={item.move.url}/>
                                  ))

                                  }
                                </div>
                        </div>
                        <div  className="database-button" onClick={handleAddFavorites}>Añadir a Base de datos</div>
                    </div>
                :
                <div className="main-card">
                    <h3 className="main-pokemon-id">#0</h3>
                            <img 
                                src="https://i.postimg.cc/qRhb4PN6/poke.png" 
                                alt="pokemon" 
                                className="main-pokemon-image"
                            />
                            <h3 className="main-pokemon-name">POKEMON</h3>
                            <p className="pokemon-stats-list">No stats</p>

                </div>
                }
                <div className="search-container">
                    <form onSubmit={handleSearch} className="search-form">
                        <input type="text" className="search-input" placeholder="Pokemon o ID" name="pokeSearch"/>
                        <button type="submit" className="search-button">
                            <i className="fas fa-search search-icon"/>
                        </button>
                    </form>
                </div>  
            </div>         
        </>
    )
}

export default Search;