import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Footer from "./Footer";

export default function AdminCreate() {
  const [formData, setFormData] = useState({
    problem_statement: '',
    description: '',
    difficulty: '',
    example: '',
    testcases: ''
  });
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    fetchUserRole();
  }, []);

  const fetchUserRole = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/api/users/current', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('User role:', response.data.user.role); // Log user role
      setUserRole(response.data.user.role); // Assuming the role is nested under 'user' key
    } catch (error) {
      console.error('Error fetching user role:', error);
    }
  };

  useEffect(() => {
    console.log('User role:', userRole); // Log user role after setting state
    if (userRole !== 'admin') {
      //window.location.href = '/';
      console.log(userRole) // Redirect to homepage or another route
    }
  }, [userRole]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Retrieve the authentication token from localStorage

try {
  const response = await axios.post('http://localhost:3001/api/questions/create', formData, {
    headers: {
      Authorization: `Bearer ${token}` // Include the token in the Authorization header
    }
  });
  console.log('Question added:', response.data);
  setFormData({
    problem_statement: '',
    description: '',
    difficulty: '',
    example: '',
    testcases: ''
  });
} catch (error) {
  console.error('Error adding question:', error);
}

  };

  if (!(userRole === 'admin')) {
    return <div>You do not have permission to access this page.</div>;
  }

  return (
    <div className="bg-gray-100 text-gray-700 min-h-screen">
      <AdminNavbar btn="Go back" to="/admin-questions" />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-4">Add New Question</h1>
        <form onSubmit={handleSubmit} className="w-1/3 mx-auto bg-white p-12 shadow-lg rounded-lg">
          <div className="mb-4">
            <label htmlFor="problem_statement" className="block text-gray-800 mb-2">Problem Statement:</label>
            <input id="problem_statement" name="problem_statement" value={formData.problem_statement} onChange={handleChange} className="w-full px-3 py-2 border rounded text-black" placeholder='Your problem statement' required />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-800 mb-2">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded text-black" placeholder='Additional description' required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="difficulty" className="block text-gray-800 mb-2">Difficulty:</label>
            <input type="text" id="difficulty" name="difficulty" value={formData.difficulty} onChange={handleChange} className="w-full px-3 py-2 border rounded text-black" placeholder='Easy / Medium / Hard' required />
          </div>
          <div className="mb-4">
            <label htmlFor="example" className="block text-gray-800 mb-2">Example:</label>
            <textarea id="example" name="example" value={formData.example} onChange={handleChange} className="w-full px-3 py-2 border rounded text-black" placeholder='{"input": "Example input", "output": "Example output"}' required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="testcases" className="block text-gray-800 mb-2">Test Cases:</label>
            <textarea id="testcases" name="testcases" value={formData.testcases} onChange={handleChange} className="w-full px-3 py-2 border rounded text-black" placeholder='[{"input": "Test case 1 input", "output": "Test case 1 output"}, {"input": "Test case 2 input", "output": "Test case 2 output"}, {"input": "Test case 3 input", "output": "Test case 3 output"}]' rows={4} required></textarea>
          </div>
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">Add Question</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
