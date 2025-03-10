import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import assets from '../../assets/assets/assets';
import '../../index.css';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
    const { openSignIn } = useClerk(); // ✅ Call the function before destructuring
    const { user } = useUser(); // ✅ Correctly call the hook

    const location = useLocation();
    const isCourseListPage = location.pathname.includes("/course-list");

    return (
        <div
            className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
                isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'
            }`}
        >
           <Link to = '/'> <img src={assets.logo} alt="Logo" className="w-28 lg:w-32 cursor-pointer" /></Link>
            <div className="hidden md:flex items-center gap-5 text-gray-500">
                <div className='flex items-center gap-5'>
                    { user && <>
                        <button>Become Educator</button>
                    |
                    <Link to="/my-enrollments"> My Enrollments</Link>
                    </>}
                </div>
                { user ? <UserButton /> :
                    <button onClick={() => openSignIn()} className="bg-blue-600 text-white px-5 py-2 rounded-full">
                    Create Account
                </button>}
            </div>
            <div  className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
                  <div className='flex items-center gap-1 sm:gap-2 max-sm:text-sm'>
                     
                  { user && <>
                       <Link to = '/become-educator'> <button>Become Educator</button></Link>
                    |
                    <Link to="/my-enrollments"> My Enrollments</Link>
                    </>}
                  </div>
                { user ? <UserButton /> :

                  <button onClick={()=>openSignIn()}><img src={assets.user_icon} alt="" /></button>
                }
            </div>
        </div>
    );
};

export default Navbar;
