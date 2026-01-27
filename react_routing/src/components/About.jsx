import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  // useNavigate function
  const navigate= useNavigate();
  function handleClick(){
    navigate('/dashboard')

  }
  return (
    <div>
      About page
      {/* useNavigate */}
      <button onClick={handleClick}>
        Move to dashboard
      </button>
    </div>
  )
}

export default About
