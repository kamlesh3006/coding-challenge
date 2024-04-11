import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer';

export default function Problems() {
  const [questions, setQuestions] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3001/api/questions/getallquestions')
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const getClassForDifficulty = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-500 font-semibold';
      case 'Medium':
        return 'text-yellow-500 font-semibold';
      case 'Hard':
        return 'text-red-500 font-semibold';
      default:
        return '';
    }
  };
  
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the signin page or any other desired page
    navigate('/signin');
  };
  return (
    <div>
      <Navbar textCol="gray-700" bgCol="gray-100" to="/signin" btn="Sign in" onLogout={handleLogout} />
      <section className="text-gray-600 mx-6 md:mx-24 body-font">
        <div className="flex px-5 mx-auto justify-center">
          <div className="text-center md:w-1/2 md:pr-12 md:py-8 md:border-b-0 mb-10 md:mb-0 pt-10">
            <p className="leading-relaxed mb-2 text-gray-400 font-semibold">
              Welcome to
            </p>
            <h1 className="sm:text-3xl text-2xl font-medium title-font -mb-6 font-semibold text-gray-600">
              CodeArena's Problem Statements
            </h1>
          </div>
        </div>
      </section>
      <div className="relative overflow-x-auto px-20 py-10">
        <table className="w-full text-sm text-left shadow-lg rounded-xl text-gray-500 relative z-0">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr no.
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Difficulty
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          {questions.map((question, index) => (
            <tr key={question.id} className="bg-gray-50 border-b hover:bg-gray-100">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {index + 1}
              </th>
              <td className="px-6 py-4">
                {question.problem_statement}
              </td>
              <td className="px-6 py-4">
                {question.description}
              </td>
              <td className="px-6 py-4">
                <span className={getClassForDifficulty(question.difficulty)}>
                  {question.difficulty}
                </span>
              </td>

              <td className="px-6 py-4">
                <Link to={`/code-question/${question.id}`} className="font-medium text-blue-600 hover:underline">Solve</Link>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
}
