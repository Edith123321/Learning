import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import assets from '../../assets/assets/assets';
import humanizeDuration from 'humanize-duration';

const Player = () => {
  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    enrolledCourses.forEach((c) => {
      if (c._id === courseId) {
        setCourse(c);
      }
    });
  }, [enrolledCourses, courseId]);

  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  // Extracts YouTube Video ID from a URL
  const getYouTubeVideoId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    return match ? match[1] : null;
  };

  return (
    <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36 bg-gradient-to-b from-cyan-100'>
      {/* Left Section: Course Structure */}
      <div className='text-gray-800'>
        <h2 className='text-xl font-semibold'>Course Structure</h2>
        <div className='pt-5'>
          {course &&
            course.courseContent.map((chapter, chapterIndex) => (
              <div key={chapterIndex} className='border border-gray-300 bg-white mb-2 rounded'>
                <div
                  onClick={() => toggleSection(chapterIndex)}
                  className='flex items-center justify-between cursor-pointer select-none px-4 py-3'
                >
                  <div className='flex items-center gap-2'>
                    <img src={assets.down_arrow_icon} alt='Arrow Icon' />
                    <p className='font-medium text-sm md:text-base'>{chapter.chapterTitle}</p>
                  </div>
                  <p className='text-sm md:text-default'>
                    {chapter.chapterContent.length} Lectures - {calculateChapterTime(chapter)}
                  </p>
                </div>
                <div
                  className={`overflow-hidden transition-all ${
                    openSection[chapterIndex] ? 'max-h-96' : 'max-h-0'
                  } duration-300`}
                >
                  <ul className='list-disc md:pl-10 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                    {chapter.chapterContent.map((lecture, lectureIndex) => (
                      <li key={lectureIndex} className='flex items-start gap-2 py-1'>
                        <img
                          className='w-4 h-4 mt-1'
                          src={false ? assets.blue_tick_icon : assets.play_icon}
                          alt=''
                        />
                        <div className='flex items-center justify-between text-gray-800 w-full text-xs md:text-default'>
                          <p>{lecture.lectureTitle}</p>
                          <div className='flex gap-10'>
                            {lecture.lectureUrl && (
                              <p
                                onClick={() =>
                                  setPlayerData({
                                    ...lecture,
                                    chapter: chapterIndex + 1,
                                    lecture: lectureIndex + 1,
                                  })
                                }
                                className='text-blue-500 cursor-pointer'
                              >
                                Watch
                              </p>
                            )}
                            <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000)}</p>
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

      {/* Right Section: Video Player & Ratings */}
      <div className='bg-white p-4 rounded shadow-md'>
        {playerData ? (
          <>
            <h3 className='text-lg font-semibold mb-2'>{playerData.lectureTitle}</h3>
            {getYouTubeVideoId(playerData.lectureUrl) ? (
              <iframe
                className='w-full h-64 md:h-80 rounded'
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(playerData.lectureUrl)}`}
                title={playerData.lectureTitle}
                allowFullScreen
              ></iframe>
            ) : (
              <p className='text-red-500'>Invalid YouTube URL</p>
            )}
            <div className='mt-4'>
              <h4 className='font-medium text-gray-700'>Rate this lecture:</h4>
              <div className='flex gap-1 mt-2'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`cursor-pointer text-2xl ${
                      star <= rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              {rating > 0 && <p className='text-gray-600 mt-2'>You rated this {rating} out of 5.</p>}
            </div>
          </>
        ) : (
          <p className='text-gray-500'>Select a lecture to watch</p>
        )}
      </div>
    </div>
  );
};

export default Player;
