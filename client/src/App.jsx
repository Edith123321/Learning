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

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/course-list' element={<CourseList />}/>
        <Route  path='/course-list/:input' element={<CourseList />}/>
        <Route path='my-enrollments' element ={<MyEnrollments />}/>
        <Route path='/player/:CourseId' element={<Player />}/>
        <Route path='/loading/:path' element ={<Loading />} />
        <Route path='/educator' element ={<Educator/> }>
              <Route path='educator' element ={<Dashboard />}/>
              <Route path='add-course' element = {<AddCourse />}/>
              <Route path='my-courses' element = {<MyCourses />} />
              <Route path='student-enrolled' element ={<StudentsEnrolled />}/>
              
        </Route>
          
       
         

      </Routes>
    </div>
  )
}

export default App
