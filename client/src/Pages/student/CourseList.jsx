import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SearchBar from '../../components/student/SearchBar'
import { AppContext } from '../../context/AppContext'
import CourseCard from '../../components/student/CourseCard'
import { div } from 'framer-motion/client'

const CourseList = () => {
  const { allCourses } = useContext(AppContext)
  const { input } = useParams()

  const [filteredCourse, setFilteredCourse] = useState([])

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()
      input ?
        setFilteredCourse(tempCourses.filter(item => item.courseTitle.toLowerCase().includes(input.toLowerCase())))
        :
        setFilteredCourse(tempCourses)
    }
  }, [allCourses, input])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="py-7 w-full flex flex-col md:flex-row items-start md:items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 gap-4">
        <div>
          <h1 className="text-gray-950 text-2xl md:text-3xl font-semibold">Course List</h1>
          <div className="flex gap-2 py-4 text-sm md:text-base">
            <Link to='/' className="text-blue-500 hover:underline">Home</Link>
            <span>|</span>
            <span>Course List</span>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <SearchBar data={input} />
        </div>
      </div>

     

     
      <div className="px-4 sm:px-10 md:px-14 lg:px-36 pb-16">
        {filteredCourse.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourse.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-600">No courses found</h3>
            {input && (
              <p className="text-gray-500 mt-2">
                No courses match your search for "{input}"
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseList