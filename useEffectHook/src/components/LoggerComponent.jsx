import React, { useEffect, useState } from 'react'

const LoggerComponent = () => {

    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("component render or count changed:", count);
    })     //it runs on every render
    
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={()=> setCount(count+1)}
            >Increment</button>
      
    </div>
  )
}

export default LoggerComponent
