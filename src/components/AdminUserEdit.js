import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

export default function AdminUserEdit() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [userRole, setUserRole] = useState('');
  const [userId, setUserId] = useState(null); // State to store the ID of the user being edited

  useEffect(() => {
    fetchUserRole();
  }, []);

  useEffect(() => {
    if (userRole !== 'admin') {
      console.log(userRole);
    }
  }, [userRole]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userIdFromParams = params.get('userId');
    setUserId(userIdFromParams);
  }, []);

  useEffect(() => {
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const fetchUserRole = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/api/users/current', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserRole(response.data.user.role);
    } catch (error) {
      console.error('Error fetching user role:', error);
    }
  };

  const fetchUserData = async () => {
    try {
      console.log('Fetching user data...');
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:3001/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('User data:', response.data);
      setFormData(response.data); // Populate the form fields with existing user data
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.patch(`http://localhost:3001/api/users/viewProfile/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('User updated:', response.data);
      // Optionally, you can redirect the user to a different page after successful update
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (!(userRole === 'admin')) {
    return <div>You do not have permission to access this page.</div>;
  }

  return (
    <div className="bg-gray-100 text-gray-600 min-h-screen">
      <AdminNavbar btn="Go back" to="/admin-users" />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-4">Edit User</h1>
        <form onSubmit={handleSubmit} className="w-1/3 mx-auto bg-white p-12 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 mb-2">Name:</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded text-black" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 mb-2">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded text-black" required />
          </div>
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">Update User</button>
        </form>
      </div>
    </div>
  );
}
