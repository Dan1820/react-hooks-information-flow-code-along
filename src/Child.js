import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handleClicks(){
    const newColor= getRandomColor()
    onChangeColor(newColor)
  }
  return <div 

  onClick={handleClicks}
  className="child" 
  style={{ backgroundColor: color}} />;
}

export default Child;
