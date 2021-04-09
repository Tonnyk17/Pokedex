import { useState, useEffect } from "react";

const useInitialState = () => {
    const [list, setList] = useState([]);
    const [selected, setSelect] = useState({});
    const [searchPoke, setSearchPoke] = useState(1);
    const [state, setState] = useState({});
    const [movements, setMovements] = useState({moves:[]});
    const nextPage = payload => {
        setState(payload)
    }
    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${state}`)
        .then(response => response.json())
        .then(data => data.results)
        .then(data =>  setList(data))
    },[state])
    
    const selection = payload => {
       setSelect({
           ...payload,
          
       })
    }
    const search = payload => {
        setSearchPoke(payload)
    }
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchPoke}/`)
        .then(response => response.json())
        .then(data => setSelect(data))
         
    },[searchPoke])
   
    const addMovements = payload =>{
        if(movements.moves.length <= 3)
        {
        setMovements({
            ...movements,
            moves: [...movements.moves,payload]
        })
        }
    }
    
    
    return{
        list,
        selected,
        selection,
        search,
        nextPage,
        addMovements,
        movements
    }
}

export default useInitialState;