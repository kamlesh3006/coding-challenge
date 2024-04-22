import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode  } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard  } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import axios from "axios";
import logo from "../assets/logo.png";

export default function AdminNavbar({ btn, to, textCol, bgCol }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRole, setUserRole] = useState('');
  const [users, setUsers] = useState(0);
  const [questions, setQuestions] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

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
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/api/users/viewProfileall', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data.users.length)
      setUsers(response.data.users.length);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/api/questions/getallquestions', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data.length)
      setQuestions(response.data.length);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <div>
      <header className={`navbar lg:px-36 text-gray-700 bg-gray-100 relative`}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <img src={logo} alt="Logo" className="logo-image" />
              <span className="ml-10 text-xl text-gray-700"> Coding</span>
            </p>
          </Link>
          <nav className="md:ml-auto flex font-thin flex-wrap items-center text-base justify-center">
            <Link
              to={to}
              className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black"
            >
              {btn}
            </Link>
            <button
              onClick={handleLogout}
              className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>
      <div className="bg-indigo-600 relative top-0 left-0 w-full h-40"></div>
      <div className="container mx-auto flex justify-center -mt-24">
      <Link to={"/admin-questions"} className="z-10">
      <div className="bg-white w-72 h-40 p-6 m-4 z-10 rounded-lg shadow-md flex flex-col text-left hover:shadow-lg transition duration-300">
        <div className="flex items-center justify-between">
          <p className="font-bold">Table of</p>
          <div className="w-fit px-3 py-2 rounded" style={{ backgroundColor: "#E2E2F4" }}>
            <FontAwesomeIcon icon={faFileCode } size="lg" style={{ color: "#4f46e5" }} />
          </div>
        </div>
        <h1 className="text-4xl font-bold mt-3">Questions</h1>
        <p className="text-sm mt-2 text-gray-400">Click to view</p>
      </div>
      </Link>
      <Link to={"/admin-users"} className="z-10">
      <div className="bg-white w-72 h-40 p-6 m-4 z-10 rounded-lg shadow-md flex flex-col text-left hover:shadow-lg transition duration-300">
        <div className="flex items-center justify-between">
          <p className="font-bold">Table of</p>
          <div className="w-fit px-3 py-2 rounded" style={{ backgroundColor: "#E2E2F4" }}>
            <FontAwesomeIcon icon={faAddressCard } size="lg" style={{ color: "#4f46e5" }} />
          </div>
        </div>
        <h1 className="text-4xl font-bold mt-3">Students</h1>
        <p className="text-sm mt-2 text-gray-400">Click to view</p>
      </div>
      </Link>
      <div className="bg-white w-72 h-40 p-6 m-4 z-10 rounded-lg shadow-md flex flex-col text-left">
        <div className="flex items-center justify-between">
          <p className="font-bold">Total</p>
          <div className="w-fit px-3 py-2 rounded" style={{ backgroundColor: "#E2E2F4" }}>
            <FontAwesomeIcon icon={faCircleQuestion} size="lg" style={{ color: "#4f46e5" }} />
          </div>
        </div>
        <h1 className="text-4xl font-bold mt-4">{questions} <span className="text-3xl">Questions</span></h1>
      </div>
      <div className="bg-white w-72 h-40 p-6 m-4 z-10 rounded-lg shadow-md flex flex-col text-left">
        <div className="flex items-center justify-between">
          <p className="font-bold">Active</p>
          <div className="w-fit px-3 py-2 rounded" style={{ backgroundColor: "#E2E2F4" }}>
            <FontAwesomeIcon icon={faUser} size="lg" style={{ color: "#4f46e5" }} />
          </div>
        </div>
        <h1 className="text-4xl font-bold mt-4">{users} <span className="text-3xl">Students</span></h1>
      </div>
    </div>
    </div>
  );
}

AdminNavbar.propTypes = {
  btn: PropTypes.string,
  to: PropTypes.string,
  textCol: PropTypes.string,
  bgCol: PropTypes.string,
};
