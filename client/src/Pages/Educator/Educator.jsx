import React from 'react'
import Navbar from '../../components/educator/Navbar'
import SideBar from '../../components/educator/SideBar';
import { Outlet } from 'react-router-dom';

const Educator = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar />
      <div className='flex'>
        <SideBar />
        <div className='flex-1'>
          {<Outlet />}
        </div>
      </div>
      
    </div>
  )
}

export default Educator
