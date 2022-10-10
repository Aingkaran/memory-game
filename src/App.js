import './styles/App.css';
import React, { useState, useEffect } from "react";
import Pokemon from './components/Pokemon'
import Counter from './components/Counter'
import Popup from './components/Popup'

import charizard from './Images/01.png';
import blastoise from './Images/02.png';
import venasaur from './Images/03.png';
import greninja from './Images/04.png';
import dragonite from './Images/05.png';
import pikachu from './Images/06.png';
import sceptile from './Images/07.png';
import infernape from './Images/08.png';
import mewtwo from './Images/09.png';
import golem from './Images/10.png';
import machomp from './Images/11.png';
import alakazam from './Images/12.png';

const App=()=> {
  const [pokemonArray, setpokemonArray]=useState([charizard,blastoise,venasaur,greninja,dragonite,pikachu,sceptile,infernape,mewtwo,golem,machomp,alakazam])
  
  const [Streak, setStreak]=useState(0)
  const [bestScore, setbestScore]=useState(0)
  const [selectedPokemon, setSelectedPokemon]= useState([])

  const [closeBtn, setcloseBtn]=useState(false)


  const closeWindow=()=>{
      if (closeBtn==true){
          setcloseBtn(false)
      }
    }
    
  const pokemonRandom=()=>{
      let pokemonsubArray= [...pokemonArray]
      let index= pokemonsubArray.length
      

      while (index != 0){
          let random_num = Math.floor(Math.random() * index)
          index--;
          [pokemonsubArray[index], pokemonsubArray[random_num]] = [pokemonsubArray[random_num], pokemonsubArray[index]]
      }
      setpokemonArray(pokemonsubArray)
      }

  const countStreak=(e)=>{
    let selectedArray = [...selectedPokemon,e.target.alt]
    setSelectedPokemon(selectedArray)
    if (hasDuplicates(selectedArray)){
      if (Streak>bestScore){
        setbestScore(Streak)
      }
      setStreak(0)
      setSelectedPokemon([])
    }
    else{
      if (Streak+1==12){
        setbestScore(12)
        setStreak(0)
        setSelectedPokemon([])
        setcloseBtn(true)
        
      }
      else{
        setStreak(Streak+1)
      }

      
    }
  }

  const gameControl=(e)=>{
    pokemonRandom()
    countStreak(e)
  
  }



  function hasDuplicates(arr) {
    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));
  }

  return (
    <div className="App">
      <div className="Header">
      <img className= "header-title" src="https://fontmeme.com/permalink/221009/883679766a81ed641a7acf28d5ab937b.png" alt="pokemon-font" border="0"></img>
      </div>
      <div className="counter">
        
          <Counter streak={Streak} best={bestScore}></Counter>
      </div>
      <div className="Pokemon-Array">
        <Pokemon randomFunction={gameControl} Array={pokemonArray}></Pokemon>
      </div>
      <Popup trigger={closeBtn} closeWindowFunc={closeWindow}>
        <button>CLOSE</button>
      </Popup>

        
    </div>
  );
}

export default App;
