import React, { useState } from 'react'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(true)

/*  4.early return */
if(!isLoggedIn){
    return(
        <LoginBtn/>
    )
}



// 1. Logical Operator
return(
    <div>
        <h1>Welcome Everyone to codehelp web dev course</h1>
        <div>
            {isLoggedIn && <LogoutBtn/>}
        </div>
    </div>
)

/*

    2. Ternary Operator
    return(
        <div>
            {isLoggedIn? <LogoutBtn/>:<LoginBtn/>}
        </div>
    )
        */


   /*  3. if-else
   if(isLoggedIn){
        return(
            <LogoutBtn />
        )
    }
    else{
        return(
            <LoginBtn />
        )
    } */

        
 
}

export default App
