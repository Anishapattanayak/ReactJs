import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashbord = () => {
  return (
    <div>
      DashBoard page
      <Outlet />

    </div>
  )
}

export default Dashbord
