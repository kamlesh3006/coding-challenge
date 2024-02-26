import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminNavbar(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Assume you have a token stored in localStorage after login
      const token = localStorage.getItem('token');
      
      // Make a request to your backend to get user data including role
      const response = await axios.get('http://localhost:3001/api/users/current', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Set user role in state
      setUserRole(response.data.user.role);
    //   console.log(userRole)
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };


  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the signin page or any other desired page
    navigate('/signin');
  };

  return (
    <div>
      <header
        className={`navbar lg:px-36 text-${
          props.textCol === "gray-700" ? "gray-700" : "white"
        } bg-${props.bgCol === "gray-100" ? "gray-100" : ""}`}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <img src="./logo.jpg" alt="Logo" className="logo-image" />
              <span
                className={`ml-10 text-${
                  props.textCol === "gray-700" ? "gray-700" : "white"
                } text-xl`}
              >
                Coding
              </span>
            </p>
          </Link>
          <nav className="md:ml-auto flex font-thin flex-wrap items-center text-base justify-center">
            <Link
              to={props.to}
              className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black"
            >
              {props.btn}
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
    </div>
  );
}

AdminNavbar.propTypes = {
  btn: PropTypes.string,
  to: PropTypes.string,
  textCol: PropTypes.string,
  bgCol: PropTypes.string,
};
