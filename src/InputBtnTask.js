import { useState } from "react";

const myComponentStyle = {
  width: 500,
  height: 500,
 
};

let box = document.querySelector('.container');
function InputBtn() {
    

function getRandom(){
    let min;
    let max;
    console.log(min)
    return Math.ceil(Math.random() * (max - min) + min)
}
  

  function handle(){
console.log(box)
    box.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
  }






return <div  style={myComponentStyle} onMouseLeave={handle}></div>;
}
export default InputBtn;
