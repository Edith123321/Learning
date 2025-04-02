import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';


const MyCourses = () => {
  const { currency, allCourses } = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setCourses(allCourses);
  }, [allCourses]);

  if (!courses) return <Loading />;

  return (
    <div className="min-h-screen  items-start justify-between md:p-8 p-4 pt-8 flex flex-col w-full flex-grow ">
      <div className="w-full flex-col flex">
        <h2 className="pb-4 text-xl font-semibold text-gray-800">My Courses</h2>
        <div className="w-full max-w-6xl mx-auto overflow-x-auto bg-white rounded-lg shadow-md border border-gray-300">
          <table className="w-full table-auto">
            <thead className="bg-gray-100 text-gray-900 border-b border-gray-300 text-sm">
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold">All Courses</th>
                <th className="px-4 py-3 font-semibold">Earnings</th>
                <th className="px-4 py-3 font-semibold">Students</th>
                <th className="px-4 py-3 font-semibold">Published On</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              {courses.map((course) => (
                <tr key={course._id} className="border-b border-gray-300 hover:bg-gray-50">
                  {/* Course Title & Thumbnail */}
                  <td className="px-4 py-3 flex items-center space-x-3">
                    <img
                      src={course.courseThumbnail}
                      alt="Course Thumbnail"
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <span className="truncate hidden md:block">{course.courseTitle}</span>
                  </td>

                  {/* Earnings Calculation */}
                  <td className="px-4 py-3 font-medium text-green-600">
                    {currency} {(
                      course.enrolledStudents.length *
                      (course.coursePrice - (course.discount * course.coursePrice) / 100)
                    ).toLocaleString()}
                  </td>

                  {/* Enrolled Students */}
                  <td className="px-4 py-3 font-medium text-center">
                    {course.enrolledStudents.length}
                  </td>

                  {/* Published Date */}
                  <td className="px-4 py-3 text-gray-500">{course.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
