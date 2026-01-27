import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashbord from './components/dashbord';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Paramcomponent from './components/Paramcomponent';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';


//create route
const router= createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar />
        <Home />
      </div>
    },

    {
      path:"/about",
      element: 
      <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path:"/dashboard",
      element: 
      <div>
        <Navbar />
        <Dashbord />
      </div>,
      //nestedRouting
      children:[
        {
          path:'courses',
          element: <Courses />
        },
        {
          path:'mock-tests',
          element:<MockTest/>
        },
        {
          path:'mock-reports',
          element:<Reports/>
        }
      ]
    },
    // parameter
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar />
        <Paramcomponent />

      </div>
    }
  ]
)

const App = () => {
  return (

    <div>
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App
