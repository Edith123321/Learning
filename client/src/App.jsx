import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentLayout from './layouts/StudentLayout';
import EducatorLayout from './layouts/EducatorLayout';
import Home from './Pages/student/Home';
import CourseList from './Pages/student/CourseList';
import MyEnrollments from './Pages/student/MyEnrollments';
import Player from './Pages/student/Player';
import Loading from './components/student/Loading';
import CourseDetails from './Pages/student/CourseDetails';
import Dashboard from './Pages/Educator/Dashboard';
import AddCourse from './Pages/Educator/AddCourse';
import MyCourses from './Pages/Educator/MyCourses';
import StudentsEnrolled from './Pages/Educator/StudentsEnrolled';
import Educator from './Pages/Educator/Educator'

const App = () => {
  return (
    <Routes>
      {/* Student Routes */}
      <Route element={<StudentLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path='my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
      </Route>

      {/* Educator Routes */}
      <Route path='/educator' element={<EducatorLayout />}>
        <Route index element = {<Educator />} />
        <Route path='dashboard' element = {<Dashboard />} />
        <Route path='add-course' element={<AddCourse />} />
        <Route path='my-courses' element={<MyCourses />} />
        <Route path='student-enrolled' element={<StudentsEnrolled />} />
      </Route>
    </Routes>
  );
};

export default App;