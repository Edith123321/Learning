import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const AddCourse = () => {
  const { addCourse } = useContext(AppContext);
  const [formData, setFormData] = useState({
    courseTitle: '',
    coursePrice: '',
    courseThumbnail: '',
    discount: 0,
    enrolledStudents: [],
    createdAt: new Date().toISOString().split('T')[0], // Default to today
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse({
      ...formData,
      _id: Date.now().toString(), // Temporary ID
    });
    setFormData({
      courseTitle: '',
      coursePrice: '',
      courseThumbnail: '',
      discount: 0,
      enrolledStudents: [],
      createdAt: new Date().toISOString().split('T')[0],
    });
  };

  return (
    <div className="min-h-screen p-6 md:p-10 ">
      <h2 className="text-2xl font-semibold pb-4">Add New Course</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg max-w-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course Title</label>
          <input
            type="text"
            name="courseTitle"
            value={formData.courseTitle}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price ($)</label>
          <input
            type="number"
            name="coursePrice"
            value={formData.coursePrice}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
          <input
            type="text"
            name="courseThumbnail"
            value={formData.courseThumbnail}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Discount (%)</label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
