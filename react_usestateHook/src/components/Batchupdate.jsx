import React, { useState } from 'react'

const Batchupdate = () => {
    const [num, setNum] = useState(10)
    const btnClicked=()=>{
        setNum(prev=>(prev+1))
        setNum( prev=>(prev+1))
    }
  return (
    <div>
      <h3>four</h3>
        <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default Batchupdate
