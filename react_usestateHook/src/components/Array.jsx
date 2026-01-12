import React, { useState } from 'react'

const Array = () => {
  const [num, setNum] = useState([{ user: 'anisha', age: 22 }])
  const btnClicked = () => {
    const newNum = [...num];
    newNum[0]={user:'ani', age:22}
    setNum(newNum)
    console.log(newNum);
  }

  return (
    <div>
      <h3>Three</h3>
      {/* <h1>{num.user}, {num.age}</h1> */}
      <ul>
        {num.map((item, index) => (
          <li key={index}>
            {item.user}, {item.age}
            </li>

        ))}
      </ul>
      <button onClick={btnClicked}>click</button>
      

    </div>
  )
}

export default Array
