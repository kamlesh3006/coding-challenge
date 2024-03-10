import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export default function AdminQuestions() {
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
    <div className="bg-gray-100 text-gray-600 min-h-screen">
    <AdminNavbar btn="Add Question" to="/add"/>
    <div className="container shadow-lg mx-auto mt-4 max-w-screen-xl">
    <div className="overflow-x-auto">
        <div className="mx-auto">
            <div className="shadow-md">
                <table className="w-full border-md bg-white rounded-lg text-center">
                    <thead className="text-left">
                        <tr>
                            <th colSpan={4} className="px-6 py-3 text-lg border-gray-300">Users List</th>
                        </tr>
                    </thead>
                    <thead className="text-left bg-gray-100">
                        <tr>
                        <th className="px-6 py-3 text-center border-gray-300">Sr. No.</th>
                          <th className="px-6 py-3 text-center border-gray-300">Problem Statement</th>
                          <th className="px-6 py-3 text-center border-gray-300">Difficulty</th>
                          <th className="px-6 py-3 text-center border-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {data.map((item) => (
                            <tr key={item.id} className=' border-y'>
                                <td className="px-6 py-4 text-center whitespace-nowrap">{++count}</td>
                                <td className="px-6 py-4 text-center whitespace-nowrap">{item.problem_statement}</td>
                                <td className="px-6 py-4 text-center whitespace-nowrap">{item.difficulty}</td>
                                <td className="px-6 py-2 text-center whitespace-nowrap flex justify-center">
                                    <Link to={`/edit?questionId=${item.id}`} className="bg-blue-500 mr-1 hover:bg-blue-600 text-gray-100 font-bold py-2 px-4 rounded flex items-center">
                                        <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff" }} />
                                    </Link>
                                    <button onClick={() => handleDelete(item.id)} className="bg-red-500 ml-1 hover:bg-red-600 text-gray-100 font-bold py-2 px-4 rounded flex items-center">
                                        <FontAwesomeIcon icon={faTrashAlt} style={{ color: "#ffffff" }} />
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
    </div>
  );
}
