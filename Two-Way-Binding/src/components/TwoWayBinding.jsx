import React, { useState } from 'react'

const TwoWayBinding = () => {
    const [title, setTitle] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("form submitted by", title);
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name'
        value={title}  // if i set value there is nochanges on ui
        
        onChange={(e)=>{
            setTitle(e.target.value);
            
        }}
        
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default TwoWayBinding
