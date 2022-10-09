import React, { useState, useEffect } from "react";
import "../styles/Pokemon.css"



import uniqid from "uniqid";
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

const Pokemon=(props)=>{
    const { Array } = props;
    const { randomFunction } = props;


    return(
        <div>   

            <div className="pokemonCards">
                {Array.map((pokemon) => (
                    <img className="images" key={uniqid()} alt={pokemon} src={pokemon} onClick={randomFunction}></img>

                    ))}
            </div>
                    
        </div>

    )
}

export default Pokemon