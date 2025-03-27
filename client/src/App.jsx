import React from 'react'
import Navbar from './components/student/Navbar'
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import Home from './Pages/student/Home'
import CourseList from './Pages/student/CourseList';
import MyEnrollments from './Pages/student/MyEnrollments';
import Player from './Pages/student/Player';
import Loading from './components/student/Loading';
import Educator from './Pages/Educator/Educator';
import Dashboard from './Pages/Educator/Dashboard';
import AddCourse from './Pages/Educator/AddCourse';
import MyCourses from './Pages/Educator/MyCourses';
import StudentsEnrolled from './Pages/Educator/StudentsEnrolled';
import Footer from './components/student/Footer';
import CourseDetails from './Pages/student/CourseDetails';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course-list/:input' element={<CourseList />} />
      []

// To this (match what your Link uses):
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path='my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:CourseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='student-enrolled' element={<StudentsEnrolled />} />

        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
