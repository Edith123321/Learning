import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import TestimonialSection from '../../components/student/TestimonialSection'
import Navbar from '../../components/student/Navbar'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7'>
      <Hero />
      {/* <Companies /> */}
      <CourseSection />
      {/* <TestimonialSection /> */}
    </div>
  )
}

export default Home
