
import React, { useState, useEffect } from "react";
import "../styles/Popup.css"

const Popup=(props)=>{
    const { closeWindowFunc } = props;



    return(props.trigger)? (
        <div className="Popup">
           <div className="popup-inner">
           <img className="youwin" src="https://fontmeme.com/permalink/221010/15c1866780227786b4a7087b355b4954.png" alt="pokemon-font" border="0"></img>
            <button className="close-btn" onClick={closeWindowFunc}>CLOSE</button>
           </div>
        </div>
    ):"";


}


export default Popup