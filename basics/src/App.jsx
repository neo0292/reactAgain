import React, {useState} from 'react'
import MyComp from "./MyComp"




function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('red');
  
const increaseCounter = () =>{
  if (counter === 20) {
    console.log(`max limit reached`);
  } else 
  setCounter(oldcounterValue => oldcounterValue + 1)
}
const decreaseCounter = () =>{
  if (counter ===0){
    console.log(`min limit reached`);
  } else 
  setCounter(oldcounterValue => oldcounterValue - 1)
}


  return (
   <>
   <h1 className='bg-green-700'>Counter: {counter}</h1>
   <button className='bg-red-400' onClick={increaseCounter}>Increase Counter</button>
   
   <br /> <br />
   <button style= {{backgroundColor: color}} onClick={decreaseCounter}>Decrease Counter</button>
   </>
  )
}

export default App
