
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
  const[fruitsArr,setFruitsArr]=useState(fruits);
  function findFruits(e){
    if(e==="")setFruitsArr(fruits);
    setFruitsArr(fruits.filter(ele=>ele.indexOf(e)!=-1));
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <input placeholder="Enter Fruit" onChange={(e)=>findFruits(e.target.value)}/>
        <ul>
          {
            fruitsArr.map((ele)=>
            <li key={ele}>{ele}</li>
            )
          }
        </ul>
    </div>
  )
}

export default App
