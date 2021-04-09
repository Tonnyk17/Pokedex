import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import "../assets/styles/components/CardsContainer.css";
import AppContext from "../context/Appcontext";

const CardsContainer = () => {
    const { list,nextPage } = useContext(AppContext);
    const [page, setPage] = useState(0)
    
    let count = page;
    
        nextPage(page)
   
    const handleMoveRight = () => {

       count+=20;
            if(count > 1118)
            {
                count= 0
            }
       setPage(count)  
       nextPage(page)   
    
    };

    const handleMoveLeft = () => {
        count-=20;
            if(count < 0)
            {
                count = 1100
            }
        setPage(count)  
        nextPage(page) 
       
    }
    return(
        <>
            <div className="card-container-buttons">
                <div className="list-button" onClick={handleMoveLeft}>Anterior</div>
                <div className="list-button" onClick={handleMoveRight}>Siguiente</div>
            </div>
            <div className="cards-container">
              
              {list.map(item => (
                  <Card pokeInfo={item} key={item.name}/>
              ))
              }
            </div>
        </>
    );
}

export default CardsContainer;