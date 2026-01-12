import React, { useState } from 'react'

const UseStateHook = () => {
    const [num, setNum] = useState(0)
  function increaseNum() {
    setNum(num+1)
    // console.log('increasing');

  }
  function decreaseNum() {
    setNum(num-1)
    // console.log('decreasing');
  }
  function jump5Num(){
    setNum(num+5)
  }
  return (
    <div>
      <h3>two</h3>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5Num}>increase by 5</button>
    </div>
  )
}

export default UseStateHook
