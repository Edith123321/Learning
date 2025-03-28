import React, { useContext } from 'react';
import assets from '../../assets/assets/assets';
import { AppContext } from '../../context/AppContext';
import { NavLink, useLocation } from 'react-router-dom';

const SideBar = () => {
  const { isEducator } = useContext(AppContext);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/educator/', icon: assets.home_icon },
    { name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon },
    { name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon },
    { name: 'Students Enrolled', path: '/educator/student-enrolled', icon: assets.person_tick_icon },
  ];

  if (!isEducator) return null;

  return (
    <div className='md:w-64 w-16 border-r min-h-screen text-gray-600 text-base'>
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={() =>
            `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-1 gap-3 
            ${location.pathname === item.path ? 'bg-indigo-50 border-r-[6px] border-indigo-500/90' : 'hover:bg-gray-100/90 border-r-[6px] border-white hover:border-gray-100/90'}`
          }
        >
          <img src={item.icon} alt={item.name} className='w-6 h-6' />
          <p className='md:block hidden text-center'>{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;
