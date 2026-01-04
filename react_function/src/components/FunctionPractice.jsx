import React from 'react'

const FunctionPractice = () => {
    function btnClicked(){
        console.log('button is clicked');
    }
  return (
    <div>
      <button onClick={btnClicked}>Clicked ME</button>

      <button onClick={()=>{
        console.log('btn clicked');
      }}>click here</button>
    </div>
  )
}

export default FunctionPractice
