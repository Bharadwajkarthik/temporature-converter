import React from 'react'
import { useState,useEffect } from 'react';

function Counter(){
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(()=>{
    console.log('mounting');
    console.log('updating'+count);
    console.log('updating'+count2);
    
  
  },[count,count2],)
 
  
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>increement</button>
     
      <h2>hello world {count}</h2>
      <button onClick={()=>setCount2(count2+1)}>increement</button>
     
      <h2>hello world 2 {count2}</h2>
    </div>
  )
}

export default Counter

