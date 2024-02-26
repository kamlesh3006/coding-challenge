import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (userRole === 'admin') {
      fetchQuestionsData();
    }
  }, [userRole]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/api/users/current', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserRole(response.data.user.role);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchQuestionsData = async () => {
    try {
      const token = localStorage.getItem('token');
      const questionsResponse = await axios.get('http://localhost:3001/api/questions/getallquestions', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setData(questionsResponse.data);
    } catch (error) {
      setError(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3001/api/questions/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // After successful deletion, fetch updated questions data
      fetchQuestionsData();
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!(userRole === 'admin')) {
    return <div>You do not have permission to access this page.</div>;
  }
  let count = 0
  return (
    <div className="bg-gray-900 text-white min-h-screen">
        <AdminNavbar btn="Add Question" to="/add"/>
      <div className="container py-4 mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
        <div className="overflow-x-auto">
          <div className="mx-auto max-w-3xl">
            <table className="min-w-full bg-gray-800 rounded-lg text-center">
              <thead className="text-left">
                <tr>
                  <th className="px-6 py-3 text-center border-b-2 border-gray-700">Sr. No.</th>
                  {/* <th className="px-6 py-3 text-center border-b-2 border-gray-700">ID</th> */}
                  <th className="px-6 py-3 text-center border-b-2 border-gray-700">Problem Statement</th>
                  <th className="px-6 py-3 text-center border-b-2 border-gray-700">Difficulty</th>
                  <th className="px-6 py-3 text-center border-b-2 border-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-700">
                {data.map((item) => (
                  <tr key={item.id}>
                  <td className="px-6 py-4 text-center whitespace-nowrap">{++count}</td>
                    {/* <td className="px-6 py-4 text-center whitespace-nowrap">{item.id}</td> */}
                    <td className="px-6 py-4 text-center whitespace-nowrap">{item.problem_statement}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">{item.difficulty}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <Link to={`/edit?questionId=${item.id}`} className="bg-blue-500 mr-1 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Edit
                      </Link>
                      <button onClick={() => handleDelete(item.id)} className="bg-red-500 ml-1 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                        Delete
                      </button>
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
}
