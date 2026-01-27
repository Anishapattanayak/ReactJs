import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // useNavigate function
  const navigate = useNavigate();
  function handleClick(){
    navigate('/about');

  }
  return (
    <div>
      Home page
      {/* usenavigate */}
      <button onClick={handleClick}>
        Move to About Page
      </button>
    </div>
  )
}

export default Home
