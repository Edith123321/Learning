import React, { useEffect, useState } from 'react';
import assets, { dummyDashboardData } from '../../assets/assets/assets';
import Loading from '../../components/student/Loading';
import { tr } from 'framer-motion/client';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (!dashboardData) return <Loading />;

  return (
    <div className="min-h-screen flex flex-col items-start md:p-8 md:pb-0 p-4 pt-8 pb-0 justify-between gap-8">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5 items-center">
          {/* Total Enrollments */}
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
            <img src={assets.patients_icon} alt="Students Icon" className="w-12 h-12" />
            <div>
              <p className="text-2xl font-bold">
                {dashboardData.enrolledStudentsData ? dashboardData.enrolledStudentsData.length : 0}
              </p>
              <p className="text-gray-600 text-lg">Total Enrollments</p>
            </div>
          </div>

          {/* Total Courses */}
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
            <img src={assets.appointments_icon} alt="Courses Icon" className="w-12 h-12" />
            <div>
              <p className="text-2xl font-bold">
                {dashboardData.totalCourses ? dashboardData.totalCourses : 0}
              </p>
              <p className="text-gray-600 text-lg">Total Courses</p>
            </div>
          </div>

          {/* Total Earnings */}
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md w-56">
            <img src={assets.earning_icon} alt="Earnings Icon" className="w-12 h-12" />
            <div>
              <p className="text-2xl font-bold">
                ${dashboardData.totalEarnings ? dashboardData.totalEarnings.toLocaleString() : '0.00'}
              </p>
              <p className="text-gray-600 text-lg">Total Earnings</p>
            </div>
          </div>
        </div>

        <div className=''>
         <h2 className='pb-4 text-lg font-medium'>Latest Enrollments</h2>
         <div className='flex flex-col items-center max-w-4xl rounded-md bg-white border order-gray-500/20 w-full overflow-hidden'>
            <table className='table-fixed md:table-auto w-full overflow-hidden'>
              <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
                <tr>
                <th className='px-4 py-3 font-semibold sm:table-cell text-center hidden'>#</th>
                <th className='px-4 py-3 font-semibold '>Student Name</th>
                <th className='px-4 py-3 font-semibold '> Course Title</th>
                </tr>
              </thead>
              <tbody className='text-sm text-gray-500'>
                {dashboardData.enrolledStudentsData.map((item, index)=>(
                  <tr key={index} className='border-b border-gray-500/20'>
                     <td className='px-4 py-3 text-center hidden sm:table-cell'>
                      {index +1}
                     </td>
                     <td className='md:px-4 px-2 py-3 flex items-center space-x-3'>
                      <p>{item.student.name}</p>
                     </td>
                     <td>
                      <p>{item.courseTitle}</p>
                     </td>
                  </tr>
                ))}

              </tbody>
            </table>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
