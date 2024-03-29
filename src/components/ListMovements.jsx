import React, { useContext } from "react";
import AppContext from "../context/Appcontext";
import "../assets/styles/components/ListMovements.css"

const ListMovements = ({ moves }) => {
    const { addMovements } = useContext(AppContext);

    const handleMovement = () => {
        addMovements(moves)
    }

    return (
        <>
            <div className="movements-item">
                <p className="movement-name">{moves.name}</p>
                <div className="movement-button" onClick={handleMovement}>Select</div>
            </div>
        </>
    )
}

export default ListMovements;