import React from 'react'
import FunctionPractice from './components/FunctionPractice'

const App = () => {
  // 1
  // function btnClicked(){
  //   console.log('button is clicked');
  // }
  // function mouseEnter(){
  //   console.log('Mouse Entered');
  // }

  // 3
  // function inputChanging(val){
  //   console.log(val);
  // }


  // 5
  // const pageScroll = (elem) => {
  //   if (elem > 0) {
  //     console.log(' sidha scroolling....')
  //   }
  //   else {
  //     console.log('ulta Scrolling.........');
  //   }
  // }

  return (
    <div>
      {/* 1 */}
      {/* <h1>anisha</h1>

      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click here</button>

      <button onClick={btnClicked}>Explore This</button> */}


      {/* 2 */}
      {/* or we directly create function inside the button */}
      {/* <button onClick={()=>{
      console.log('button clicked');
    }}> click Me</button> */}


      {/* 3 */}
      {/* <input
     onChange={function(elem){
      // console.log(elem.target.value);
      inputChanging(elem.target.value)
    }} type="text" placeholder='enter your name' /> */}


      {/* 4 */}
      {/* <div  onMouseMove={(elem)=>{
      console.log(elem.clientX)
    }}
    className='box'>

    </div> */}

         {/* 5 */}
      {/* <div onWheel={(elem) => {
        pageScroll(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div> */}

      <FunctionPractice />
    </div>
  )
}

export default App
