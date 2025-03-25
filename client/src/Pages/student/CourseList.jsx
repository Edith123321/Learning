import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../components/student/SearchBar'
import CourseSection from '../../components/student/CourseSection'
import { AppContext } from '../../context/AppContext'
import CourseCard from '../../components/student/CourseCard'

const CourseList = () => {
  const {allCourses} = useContext(AppContext)
  return (
    <div>
    <div className=' py-7 m-17 w-auto flex items-center  justify-between px-4 sm:px-10 md:px-14 lg:px-36 o gap-4'>
      <div >
        <h1 className='text-gray-950 mt-7 text-3xl '>Course List</h1>
        <div className='flex gap-2 py-4'>
          <Link to='/'> <h3 className=' text-blue-500'>Home  </h3></Link>
          |
          <h3> Course List</h3>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
      
    </div>
    <div className=' md:px-14 sm:px-10 lg:px-36 w-auto grid grid-cols-auto px-4  md:my-16 my-10 gap-7'>
        {allCourses.map((course, index)=> <CourseCard key={index} course={course}/>)}
      </div> 
    </div>
  )
}

export default CourseList
