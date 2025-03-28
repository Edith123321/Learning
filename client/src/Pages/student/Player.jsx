import React, { useContext, useEffect, useState } from 'react'
import CallToAction from '../../components/student/CallToAction';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import assets from '../../assets/assets/assets';
import { humanizeDuration } from 'humanize-duration';

const Player = () => {
  const {enrolledCourses, calculateChapterTime, } = useContext(AppContext)
  const {courseId} = useParams()
  const [course, setCourse] = useState(null)
  const [openSection, setOpenSection] = useState({})
  const [playerData, setPlayerData] = useState(null)

  const getCourseData =()=>{
    enrolledCourses.map((course) =>{
      if(course._id == courseId){
        setCourse(course)
      }
    })
  }
  useEffect(()=>{
    getCourseData()
  }, [enrolledCourses])
 
  const toggleSection = (index) => {
    setOpenSection((prev) => (
      {
        ...prev,
        [index]: !prev[index]
      }
    ))
  }
  return (
    <>
      <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>
        <div className='text-gray-800'>
          {/* left */}
          <h2 className='text-xl font-semibold'>Course Structure</h2>
          <div className='pt-5'>
            {course && course.courseContent.map((chapter, index) => (
              <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                <div onClick={() => toggleSection(index)} className='flex items-center justify-between cursor-pointer select-none px-4 py-3'>
                  <div className='flex items-center gap-2'>
                    <img src={assets.down_arrow_icon} alt='Arrow Icon' />
                    <p className='font-medium text-sm md:text-base'>{chapter.chapterTitle}</p>
                  </div>
                  <p className='text-sm md:text-default'>{chapter.chapterContent.length} Lectures - {calculateChapterTime(chapter)}</p>
                </div>
                <div className={`overflow-hidden transition-all ${openSection[index] ? 'max-h-96' : 'max-h-0'} duration-3000`}>
                  <ul className='list-disc md:pl-10 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                    {chapter.chapterContent.map((lecture, index) => (
                      <li key={index} className='flex items-start gap-2 py-1'>
                        
                        <img className='w-4 h-4 mt-1' src={false ? assets.blue_tick_icon : assets.play_icon} alt="" />
                        <div className='flex items-center justify-between text-gray-800 w-full text-xs md:text-default'>
                          <p>{lecture.lectureTitle}</p>
                          <div className='flex gap-10'>
                            {lecture.lectureUrl && <p onClick={()=>setPlayerData({...lecture, chapter: index + 1, lecture : i + 1})}  className='text-blue-500 cursor-pointer'>Watch</p>}
                            <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, ['h', 'm'])}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {/* right */}
        </div>
      </div>

    </>
  )
}

export default Player
