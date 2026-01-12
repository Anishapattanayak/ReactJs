import React, { useState } from 'react'

const Object = () => {
    const [num, setNum] = useState({user:'anisha', age:22});
    const btnClicked=()=>{
        const  newNum={...num}
        newNum.user='ani'
        newNum.age=22
        setNum(newNum);
        console.log(newNum)
    }
  return (
    <div>
      <h3>five</h3>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>
        click
      </button>
    </div>
  )
}

export default Object
