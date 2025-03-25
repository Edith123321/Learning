import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const CourseDetail = () => {
  const { courseId } = useParams();
  const { allCourses } = useContext(AppContext);
  const navigate = useNavigate();

  // Debugging logs
  useEffect(() => {
    console.log('Debugging Info:');
    console.log('URL courseId:', courseId);
    console.log('All courses:', allCourses);
    console.log('Found course:', allCourses?.find(c => c.id == courseId));
  }, [courseId, allCourses]);

  if (!allCourses) {
    return <div className="p-8 text-center">Loading courses...</div>;
  }

  const course = allCourses.find(c => c.id == courseId); // Using == for type coercion

  if (!course) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold mb-4">Course not found</h2>
        <p className="mb-2">Requested ID: {courseId}</p>
        <p>Available IDs: {allCourses.map(c => c.id).join(', ')}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{course.courseTitle}</h1>
          <div className="flex items-center mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {course.category}
            </span>
          </div>
          <p className="text-gray-700 mb-6">{course.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-900">
              ${course.price}
            </span>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;