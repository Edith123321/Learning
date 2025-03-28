import React from 'react'
import Navbar from '../components/educator/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/student/Footer'

const EducatorLayout = () => {
  return (
    <div>
      
      <Outlet />
      <Footer />
    </div>
  )
}

export default EducatorLayout
