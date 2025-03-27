import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration } = useContext(AppContext)
  
  return (
    <div className='md:px-36 p-8 pt-10'>
      <h1 className='text-2xl font-semibold'>My Enrollments</h1>
      <table className='w-full mt-10 border-collapse'>
        <thead className='text-gray-900 border-b border-gray-500/20 text-left max-sm:hidden text-sm'>
          <tr>
            <th className='px-4 py-3 font-semibold'>Course</th>
            <th className='px-4 py-3 font-semibold'>Duration</th>
            <th className='px-4 py-3 font-semibold'>Completed</th>
            <th className='px-4 py-3 font-semibold'>Status</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map((course, index) => (
            <tr key={index} className='border-b border-gray-200 hover:bg-gray-50'>
              <td className='px-4 py-4 flex items-center space-x-4'>
                <img 
                  className='w-14 sm:w-20 md:w-28 rounded' 
                  src={course.courseThumbnail} 
                  alt={course.courseTitle} 
                />
                <div>
                  <p className='font-medium'>{course.courseTitle}</p>
                </div>
              </td>
              <td className='px-4 py-4'>
                <p>{calculateCourseDuration(course)}</p>
              </td>
              <td className='px-4 py-4 max-sm:hidden'>
                <p>4/10 Lectures</p>
              </td>
              <td className='px-4 py-4 '>
                <button className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'>
                  On Going
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Show message if no courses are enrolled */}
      {enrolledCourses.length === 0 && (
        <div className='text-center py-10'>
          <p className='text-gray-500'>You haven't enrolled in any courses yet.</p>
        </div>
      )}
    </div>
  )
}

export default MyEnrollments