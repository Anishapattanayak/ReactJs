import React, { useState } from 'react'

const Practice = () => {
    const [name, setName] = useState('')
  return (
    <div>
        <h2>Two Way Binding Example</h2>
      <input type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}
       placeholder='enter your name'/>
      <p>you types: {name}</p>
    </div>
  );
}

export default Practice
