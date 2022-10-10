
import React, { useState, useEffect } from "react";
import "../styles/Counter.css"

const Counter=(props)=>{
    const { streak } = props;
    const { best } = props;



    return(
        <div className="counter">
            <div>Counter: {streak}</div>
            <div>Best Score: {best}</div>
        </div>
    )


}


export default Counter