import React from 'react'
import { useParams } from 'react-router-dom'

const Paramcomponent = () => {
    const {id}= useParams();
  return (
    <div>
      params: {id}
    </div>
  )
}

export default Paramcomponent
