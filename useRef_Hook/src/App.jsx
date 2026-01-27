import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import StopWatch from './components/StopWatch'

const App = () => {
  // const [count, setCount] = useState(0);
  // let val=useRef(0);

  // let btnRef=useRef();

  // function handleIncrement(){
  //   val.current = val.current +1;
  //   console.log("value of val:", val.current);
  //   setCount(count+1);
  // }
  // //it runs on every render
  // useEffect(() => {
  //   console.log("main firse render hogaya hu")
  // })

  // function changeColor(){
  //   btnRef.current.style.background="red";

  // }
  
  return (
    <div>
      <StopWatch/>



      {/* <button 
      ref={btnRef}
      onClick={handleIncrement}>
        Increment
      </button>

      <br />
      <br />

      <button onClick={changeColor}>
        Change color of 1st button
      </button>

      <div>
        Count: {count}
      </div> */}
    </div>
  )
}

export default App
