import React from 'react'

const App = () => {
  //set value in local storage
  // localStorage.setItem('user','anisha')
  localStorage.setItem('age', '18')

  //getitem from local storage
   const user=localStorage.getItem('user')
   console.log(user);

   //remove item from local storage
   localStorage.removeItem('user')

   //clear local storage
  //  localStorage.clear()

   const user2={
    username:'anisha',
    age:22,
    city:'bhubaneswar'
   }
   localStorage.setItem('user2',JSON.stringify(user2))
   const user3=JSON.parse(localStorage.getItem('user2'))
   console.log(typeof(user3));

  return (
    <div>
      anisha
    </div>
  )
}

export default App
