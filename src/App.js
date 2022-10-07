import counterFunc from './components/counterFunction.js';
import './styles/App.css';
import React, { useState, useEffect } from "react";
import Pokemon from './components/Pokemon'

const App=()=> {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      } else {
        setColor("black");
      }
    };
    
    document.addEventListener("click", changeColorOnClick);

    return () => {
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]);


  return (
    <div className="App">
      <div
          id="myDiv"
          style={{
            color: "white",
            width: "100px",
            height: "100px",
            position: "absolute",
            left: "50%",
            top: "50%",
            backgroundColor: color,
          }}>
            Click Here
        </div>
        <Pokemon></Pokemon>
    </div>
  );
}

export default App;