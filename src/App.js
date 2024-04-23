import React from 'react'
import { useState } from 'react'

function App() {
  const [input,setinput]=useState("")
  const[unit,setunit]=useState("Celsius");
  const handleinput=(e)=>
  {
    setinput(e.target.value)
  }
  const handletemp=(e)=>
  {
    setunit(e.target.value)
  }

  const handleresult=()=>{
    const Numericinput=parseFloat(input);
    if(isNaN(Numericinput)){
      return "";

    }
    if (unit === 'Celsius') {
      return (Numericinput * 9 / 5 + 32).toFixed(2); 
    } else {
      return ((Numericinput - 32) * 5 / 9).toFixed(2); 
    }
  }
  const resultunit = unit === 'Celsius' ? 'Fahrenheit' : 'Celsius';


  return (
    <div>
      <h1>Temperature converter</h1>
      <input value={input} onChange={handleinput}/><br/>
      <input type="radio" value="Celsius" id="cel" name="unit" checked={unit === 'Celsius'} onChange={handletemp}/>
        <label htmlFor="cel">celcius</label>
        <input type="radio" value="Fahrenheit" id="fah" name="unit"  checked={unit === 'Fahrenheit'} onChange={handletemp}/>
        <label htmlFor="fah">Fahrenheit</label>
        <br/>
        <p>Converted Temperature: {handleresult()} {resultunit} </p>

     
    </div>
  )
}

export default App

