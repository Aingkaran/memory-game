import React, { useState, useEffect } from "react";
import "../styles/Pokemon.css"

import charizard from '../Images/01.png';
import blastoise from '../Images/02.png';
import venasaur from '../Images/03.png';
import greninja from '../Images/04.png';
import dragonite from '../Images/05.png';
import pikachu from '../Images/06.png';
import sceptile from '../Images/07.png';
import infernape from '../Images/08.png';
import mewtwo from '../Images/09.png';
import golem from '../Images/10.png';
import machomp from '../Images/11.png';
import alakazam from '../Images/12.png';


const Pokemon=()=>{
    const [pokemonArray, setpokemonArray]=useState([charizard,blastoise,venasaur,greninja,dragonite,pikachu,sceptile,infernape,mewtwo,golem,machomp,alakazam])


    return(

        <div className="pokemonCards">
            <img src={pokemonArray[Math.floor(Math.random() * 10)]}></img>
            <img src={pokemonArray[Math.floor(Math.random() * 10)]}></img>
            <img src={pokemonArray[Math.floor(Math.random() * 10)]}></img>
            <img src={pokemonArray[Math.floor(Math.random() * 10)]}></img>
            <img src={pokemonArray[Math.floor(Math.random() * 10)]}></img>
            <img src={pokemonArray[Math.floor(Math.random() * 10)]}></img>
            <img src={pokemonArray[Math.floor(Math.random() * 10)]}></img>
            <img src={pokemonArray[Math.floor(Math.random() * 10)]}></img>
            <img src={pokemonArray[Math.floor(Math.random() * 10)]}></img>
            <img src={pokemonArray[Math.floor(Math.random() * 10)]}></img>
            <img src={pokemonArray[Math.floor(Math.random() * 10)]}></img>
            <img src={pokemonArray[Math.floor(Math.random() * 10)]}></img>
        </div>
    )
}

export default Pokemon