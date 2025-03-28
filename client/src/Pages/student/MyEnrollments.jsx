import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import {Line} from 'rc-progress'

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration } = useContext(AppContext)
  const [progressArray, setProgressArray] =useState([
    {lectureCompleted : 3, totalLectures: 12},
    {lectureCompleted : 5, totalLectures: 14},
    {lectureCompleted : 8, totalLectures: 13},
    {lectureCompleted : 2, totalLectures: 4},
    {lectureCompleted : 2, totalLectures: 5},
    {lectureCompleted : 9, totalLectures: 15},
    {lectureCompleted : 8, totalLectures: 11},
    {lectureCompleted : 1, totalLectures: 4},
    {lectureCompleted : 8, totalLectures: 17},
    {lectureCompleted : 8, totalLectures: 7},
    {lectureCompleted : 2, totalLectures: 3},
    {lectureCompleted : 8, totalLectures: 9},
    {lectureCompleted : 7, totalLectures: 10},
    {lectureCompleted : 5, totalLectures: 5}
  ])
  const {navigate} = useContext(AppContext)
  
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
                  <Line  strokeWidth={4} percent={progressArray[index] ? (progressArray[index].lectureCompleted * 100)/ progressArray[index].totalLectures : 0} className='bg-gray-300 rounded-full'/>
                </div>
              </td>
              <td className='px-4 py-4'>
                <p>{calculateCourseDuration(course)}</p>
              </td>
              <td className='px-4 py-4 max-sm:hidden'>
                <p> {progressArray[index] && `${progressArray[index].lectureCompleted}/ ${progressArray[index].totalLectures}`}<span>Lectures</span> </p>
              </td>
              <td className='px-4 py-4 '>
                <button onClick={()=>navigate('/player/' + course._id)} className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'>
                  {progressArray[index] && progressArray[index].lectureCompleted/ progressArray[index].totalLectures === 1 ? 'Complete': 'On Going'}
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