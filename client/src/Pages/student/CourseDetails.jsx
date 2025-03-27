import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { div, p, video } from 'framer-motion/client';
import assets from '../../assets/assets/assets';
import humanizeDuration from 'humanize-duration';
import YouTube from 'react-youtube';


const CourseDetails = () => {
  const { courseId } = useParams();
  const { allCourses,currency, calculateRating, calculateCourseDuration, calculateChapterTime, calculateNumberOfLectures } = useContext(AppContext);
  const [openSection, setOpenSection] = useState({})
  const [isAlreadyEnrolled, setISAlreadyEnrolled] =useState(false)
  const [playerData, setPlayerData]=useState(null)

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

  const toggleSection = (index) => {
    setOpenSection((prev) => (
      {
        ...prev,
        [index]: !prev[index]
      }
    ))
  }



  return (
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left pb-10'>
      <div className='absolute top-0 left-0 w-full h-section-height bg-gradient-to-b from-cyan-100/70 -z-1'></div>
      
      {/* Left side - made wider with flex-grow */}
      <div className='flex-grow md:flex-grow-0 md:w-2/3 z-10 text-gray-500 pr-4'> {/* Added pr-4 for some spacing */}
        <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>{course.courseTitle}</h1>
        <p dangerouslySetInnerHTML={{ __html: course.courseDescription.slice(0, 200) }} className='pt-4 md:text-base text-sm'></p>
        
        {/* Rating section */}
        <div className='flex items-center space-x-2 pt-4'>
          <p>{calculateRating(course)}</p>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <img key={i} className='w-3.5 h-3.5' src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt='' />
            ))}
          </div>
          <p className='text-gray-500'> ({course.courseRatings.length} {course.courseRatings.length > 1 ? 'ratings' : "rating"})</p>
          <p>{course.enrolledStudents.length}{course.enrolledStudents.length > 1 ? " students" : " student"}</p>
        </div>
        
        <p className='text-sm'>Course by <span className='text-blue-600 underline'>Edith Githinji</span></p>
        
        {/* Course Structure */}
        <div className='pt-8 text-gray-800'>
          <h2 className='text-xl font-semibold'>Course Structure</h2>
          <div className='pt-5'>
            {course.courseContent.map((chapter, index) => (
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
                        <img className='w-4 h-4 mt-1' src={assets.play_icon} alt="" />
                        <div className='flex items-center justify-between text-gray-800 w-full text-xs md:text-default'>
                          <p>{lecture.lectureTitle}</p>
                          <div className='flex gap-10'>
                            {lecture.isPreviewFree && <p onClick={()=>setPlayerData({videoId : lecture.lectureUrl.split('/').pop()})}  className='text-blue-500 cursor-pointer'>Preview</p>}
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
        
        {/* Course Description */}
        <div className='py-20 text-sm md:text-default'>
          <h3 className='text-gray-800 font-semibold text-xl'>Course Description</h3>
          <p dangerouslySetInnerHTML={{ __html: course.courseDescription }} className='pt-3 rich-text'></p>
        </div>
      </div>
      
      {/* Right side - made narrower */}
      <div className='md:w-1/2 z-10 shadow-custom rounded-t md:rounded-none overflow-hidden bg-white border min-w-[300px] sm:min-w-[320px] sticky top-20'> 
      {
              playerData ? 
              <YouTube  videoId={playerData.videoId} opts={{playerVars:{autoplay:1}}} iframeClassName='w-full aspect-video'/>
            : <img className='w-full h-auto' src={course.courseThumbnail} alt="" />

            }{/* Reduced min-w and added sticky positioning */}
        
        <div className='p-5 '>
          <div className='flex items-center gap-2'>
            
            <img className='w-3.5' src={assets.time_left_clock_icon} alt="" />
            <p><span className='text-red-500'>5 days</span> left at this price</p>
          </div> 
          <div className='flex gap-3 items-center pt-2'>
            <p className='text-gray-800 md:text-4xl text-2xl font-semibold'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
            <p className='md:text-lg text-red-500 line-through'>{currency}{course.coursePrice}</p>
            <p className='md:text-lg text-gray-500'>{course.discount} % off</p>
          </div>

          <div className='flex items-center text-sm md:text-default gap-4 md:pt-4 text-gray-500 pt-2'>
            <div className='flex items-center gap-1'>
              <img src={assets.star} alt="" />
              <p>{calculateRating(course)}</p>
            </div>
            <div className='h-4 w-px bg-gray-500/40'></div>

            <div className='flex items-center gap-1'>
              <img src={assets.time_clock_icon} alt="" />
              <p>{calculateCourseDuration(course)}</p>
            </div>
            <div className='h-4 w-px bg-gray-500/40'></div>
            <div className='flex items-center gap-1'>
              <img src={assets.lesson_icon} alt="" />
              <p>{calculateNumberOfLectures(course)} Lessons</p>
            </div>
          </div>

          <button className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white font-medium'>{isAlreadyEnrolled ? 'AlreadyEnrolled': 'Enroll Now'}</button>
          <div className='pt-6 '>
            <p className='md:text-xl text-lg font-medium text-gray-800'>What's in the course</p>
            <ul className='ml-4 pt-2 text-sm md:text-default list-disc text-gray-500'>
              <li>Lifetime access with free updates</li>
              <li>Step-by-stpe , hands-on project guidance.</li>
              <li>Downloadable resources and source code</li>
              <li>Quizes to test your knowledge</li>
              <li>Certificate of completion</li>
            </ul>
          </div>
        </div>

      </div>
    </div>  
  );
};

export default CourseDetails;
