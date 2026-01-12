import React from 'react'

const App = () => {
  const submitHandler=(elem)=>{
    elem.preventDefault()
    console.log("form submitted");
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
        submitHandler(elem)
      }}>
        <input type="text" placeholder='enter your name'/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
