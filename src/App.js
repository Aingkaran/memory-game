import counterFunc from './components/counterFunction.js';
import './styles/App.css';
import React, { useState, useEffect } from "react";
import Pokemon from './components/Pokemon'

const App=()=> {
  const [counter, setCounter] = useState(0);
 
  useEffect(() => {
    const nextPokemon = () => {
      if (counter==0){
        setCounter(1)
      }
      else{
        setCounter(0)
      }
    };
    const btn=document.querySelector(".btn")
    btn.addEventListener("click", nextPokemon);

    return () => {
      btn.removeEventListener("click", nextPokemon);
    };
  },[counter]);


  return (
    <div className="App">
      <div>
        </div>
        <Pokemon></Pokemon>
    </div>
  );
}

export default App;
