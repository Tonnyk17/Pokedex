import React, { useContext } from "react";
import AppContext from "../context/Appcontext";

const Moves = ({ move }) =>{
    const { removeMovement } = useContext(AppContext)

    const handleRemoveMovement = () => {
        removeMovement(move.name)
     }
        
    return(
        <div className="movements-selected-item">
                 <p className="movements-selected-name">{move.name}</p>
                <i className="fas fa-trash movements-selected-icon" onClick={handleRemoveMovement}/>
        </div>
    )
}

export default Moves;