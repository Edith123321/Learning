import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { div, p } from 'framer-motion/client';
import assets from '../../assets/assets/assets';
import humanizeDuration from 'humanize-duration';


const CourseDetails = () => {
  const { courseId } = useParams();
  const { allCourses, calculateRating, calculateCourseDuration, calculateChapterTime, calculateNumberOfLectures } = useContext(AppContext);
  const [openSection, setOpenSection] = useState({})

  const navigate = useNavigate();

  // Find course by either id or _id
  const course = allCourses.find(c =>
    c.id?.toString() === courseId ||
    c._id?.toString() === courseId
  );

  if (!allCourses.length) {
    return (
      <div className="text-center p-8">
        <p>Loading courses...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl font-bold mb-2">Course not found</h2>
        <p className="mb-4">ID: {courseId}</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const toggleSection =(index)=>{
    setOpenSection((prev)=>(
      {...prev, 
      [index ]:!prev[index]}
    ))
  }

  return (

    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left pb-10'>
      <div className='absolute top-0 left-0 w-full h-section-height bg-gradient-to-b from-cyan-100/70 -z-1'> </div>

        {/* left */}
        <div  className='max-w-xl z-10 text-gray-500 '>
          <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>{course.courseTitle}</h1>
          <p dangerouslySetInnerHTML={{__html: course.courseDescription.slice(0, 200)}} className='pt-4 md:text-base text-sm'></p>
          <div className='flex items-center space-x-2 pt-4'>
          <p>{calculateRating(course)}</p>
          <div className='flex'>
            {[...Array(5)].map((_, i)=>(<img key = {i} className='w-3.5 h-3.5' src = {i<Math.floor(calculateRating(course))? assets.star:assets.star_blank} alt = '' />
            )  
          )}
          </div>
          <p className='text-gray-500'> ({course.courseRatings.length} {course.courseRatings.length>1 ? 'ratings': "rating"})</p>

          <p>{course.enrolledStudents.length}{course.enrolledStudents.length > 1 ? " students":" student"}</p>
        </div>
        <p className='text-sm'>Course by <span className='text-blue-600 underline'>Edith Githinji</span></p>

        <div className='pt-8 text-gray-800'>
           <h2 className=' text-xl font-semibold'>Course Structure</h2>
           <div className='pt-5'>
              {course.courseContent.map((chapter, index)=>(
                <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                  <div  onClick={()=>toggleSection(index)} className=' flex items-center justify-between cursor-pointer select-none px-4 py-3'>
                    <div className='flex items-center gap-2'>
                      <img src={assets.down_arrow_icon} alt = 'Arrow Icon' />
                      <p className=' font-medium text-sm md:text-base'>{chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm md:text-default'>{chapter.chapterContent.length} Lectures - {calculateChapterTime(chapter)}</p>
                  </div>
                  <div className={`overflow-hidden transition-all ${openSection[index]? 'max-h-96': 'max-h-0'} duration-3000`}>
                    <ul className=' list-disc md:pl-10 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                      {chapter.chapterContent.map((lecture, index)=>(
                        <li key={index} className='flex items-start gap-2 py-1'>
                          <img className='w-4 h-4 mt-1' src={assets.play_icon} alt="" />
                          <div className='flex items-center justify-between text-gray-800 w-full text-xs md:text-default'>
                            <p>{lecture.lectureTitle}</p>
                            <div className='flex gap-10'>
                              {lecture.isPreviewFree && <p className='text-blue-500 cursor-pointer'>Preview</p>}
                              <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000 , ['h', 'm'])}</p>
                            </div>
                          </div>

                        </li>
                     ))}
                    </ul>
                  </div>
                </div>
              )
              )}
           </div>
        </div>
        
        </div>
        {/* right */}
        <div>

        </div>
     

    </div>
    // <div className="max-w-4xl mx-auto p-4">
    //   <div className="bg-white rounded-lg shadow overflow-hidden">
    //     <div className="md:flex">
    //       <div className="md:w-1/3">
    //         <img
    //           src={course.courseThumbnail}
    //           alt={course.courseTitle}
    //           className="w-full h-64 object-cover"
    //         />
    //       </div>
    //       <div className="p-6 md:w-2/3">
    //         <h1 className="text-2xl font-bold mb-2">{course.courseTitle}</h1>
    //         <p className="text-gray-600 mb-2">By {course.educator}</p>
    //         <p className="text-xl text-blue-600 mb-4">
    //           ${course.coursePrice}
    //         </p>
    //         <p className="text-gray-700">{course.courseDescription}</p>
    //         <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
    //           Enroll Now
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CourseDetails;
