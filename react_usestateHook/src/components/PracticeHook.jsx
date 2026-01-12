import React, { useState } from 'react'

const PracticeHook = () => {
    
            const [count, setValue] = useState(0)
    return (
        
        < div >
        <h3>one</h3>
        <button onClick={()=>setValue(count+1)}>State count is{count}</button>
    </div >
  )
}

export default PracticeHook
