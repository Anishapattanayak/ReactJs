import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA'

// step1: create context
const UserContext= createContext();
//step2: wrap all the child inside a provider
//step3: pass value
//step4: consumer ke andar jaake valure consume karlo


const App = () => {
  const [user, setUser]= useState({name:"anisha"});
  return (
    
    <div>
      {/* step2: wrap */}
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
     
    </div>
  )
}

export default App
export {UserContext}
