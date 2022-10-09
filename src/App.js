import counterFunc from './components/counterFunction.js';
import './styles/App.css';
import React, { useState, useEffect } from "react";
import Pokemon from './components/Pokemon'

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
  const [counter, setCounter] = useState(0);


  const pokemonRandom=()=>{
      let pokemonsubArray= [...pokemonArray]
      let index= pokemonsubArray.length
      

      while (index != 0){
          let random_num = Math.floor(Math.random() * index)
          index--;
          [pokemonsubArray[index], pokemonsubArray[random_num]] = [pokemonsubArray[random_num], pokemonsubArray[index]];

      }

      setpokemonArray(pokemonsubArray)
      }

  // useEffect(() => {
  //     const nextPokemon = () => {
  //         if (counter==0){
  //         setCounter(1)
  //         }
  //         else{
  //         setCounter(0)
  //         }
  //     };
  //     const btn=document.querySelectorAll(".images")
  //     btn.forEach((button)=>{
  //         button.addEventListener("click", nextPokemon);
  //         console.log(button)
  //     })

  //     return () => {
  //         btn.forEach((button)=>{
  //             button.removeEventListener("click", nextPokemon);
  //         })        };
  //     },[counter]);




  return (
    <div className="App">
      <div>
        </div>
        <Pokemon randomFunction={pokemonRandom} Array={pokemonArray}></Pokemon>
    </div>
  );
}

export default App;
