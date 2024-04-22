import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Footer from "./Footer";

export default function AdminEdit() {
  const [formData, setFormData] = useState({
    problem_statement: '',
    description: '',
    difficulty: '',
    example: '',
    testcases: ''
  });
  const [userRole, setUserRole] = useState('');
  const [questionId, setQuestionId] = useState(null); // State to store the ID of the question being edited

  useEffect(() => {
    fetchUserRole();
  }, []);

  useEffect(() => {
    if (userRole !== 'admin') {
      console.log(userRole);
    }
  }, [userRole]);

  useEffect(() => {
    // Assuming you retrieve the question ID from the URL params or from some other source
    const params = new URLSearchParams(window.location.search);
    const questionIdFromParams = params.get('questionId'); // Assuming questionId is in URL params
    setQuestionId(questionIdFromParams);
  }, []);
  

  useEffect(() => {
    if (questionId) {
      fetchQuestionData();
    }
  }, [questionId]);

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

  const fetchQuestionData = async () => {
    try {
      console.log('Fetching question data...');
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:3001/api/questions/get_specific_question/${questionId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Question data:', response.data);
      setFormData(response.data); // Populate the form fields with existing question data
      console.log('Form data after setting:', formData);
    } catch (error) {
      console.error('Error fetching question data:', error);
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
      const response = await axios.put(`http://localhost:3001/api/questions/update/${questionId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Question updated:', response.data);
      // Optionally, you can redirect the user to a different page after successful update
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  if (!(userRole === 'admin')) {
    return <div>You do not have permission to access this page.</div>;
  }

  return (
    <div className="bg-gray-100 text-gray-600 min-h-screen">
      <AdminNavbar btn="Go back" to="/admin-questions" />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-4">Edit Question</h1>
        <form onSubmit={handleSubmit} className="w-1/3 mx-auto bg-white p-12 rounded-lg shadow-lg">
          {/* Add input fields for editing question data */}
          <div className="mb-4">
            <label htmlFor="problem_statement" className="block text-gray-800 mb-2">Problem Statement:</label>
            <input id="problem_statement" name="problem_statement" value={formData.problem_statement} onChange={handleChange} className="w-full px-3 py-2 border rounded text-black" required />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-800 mb-2">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded text-black" required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="difficulty" className="block text-gray-800 mb-2">Difficulty:</label>
            <input type="text" id="difficulty" name="difficulty" value={formData.difficulty} onChange={handleChange} className="w-full px-3 py-2 border rounded text-black" required />
          </div>
          <div className="mb-4">
            <label htmlFor="example" className="block text-gray-800 mb-2">Example:</label>
            <textarea id="example" name="example" value={formData.example} onChange={handleChange} className="w-full px-3 py-2 border rounded text-black" required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="testcases" className="block text-gray-800 mb-2">Test Cases:</label>
            <textarea id="testcases" name="testcases" value={formData.testcases} onChange={handleChange} className="w-full px-3 py-2 border rounded text-black" rows={4} required></textarea>
          </div>
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">Update Question</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
