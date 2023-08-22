import React from 'react'
import LeftSide from '../../components/SideBar/LeftSide'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='body'>
        <LeftSide/>
        <Outlet/>
    </div>
  )
}

export default Dashboard