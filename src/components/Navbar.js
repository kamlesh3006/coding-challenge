import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    // Check if the user is already authenticated (e.g., if a token exists in local storage)
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    // Call the logout function passed as a prop
    props.onLogout();
    // Close the dropdown menu
    setDropdownOpen(false);
  };

  return (
    <div>
      <header
        className={`navbar lg:px-36 text-${
          props.textCol === "gray-700" ? "gray-700" : "white"
        } bg-${props.bgCol === "gray-100" ? "gray-100" : ""}`}
      >
        <div className="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center">
          <Link to="/">
            <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <img src={logo} alt="Logo" className="logo-image" />
              <span
                className={`ml-10 text-${
                  props.textCol === "gray-700" ? "gray-700" : "white"
                } text-xl`}
              >
                CodeArena
              </span>
            </p>
          </Link>
          <nav className="md:ml-auto flex font-extralight flex-wrap items-center text-base justify-center">
            <Link
              to="/explore"
              className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black"
            >
              Explore
            </Link>
            <Link
              to="/problems"
              className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black"
            >
              Problems
            </Link>
            <Link
              to="/compiler"
              className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black"
            >
              Compiler
            </Link>
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="ml-4 mr-8 py-3 px-3 transition duration-500 rounded-full hover:bg-white focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                      fill="#4B5563"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 transition-opacity duration-500 ${
                    dropdownOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {dropdownOpen && (
                    <div>
                      <div className="flex mx-2 mt-2 pb-2 border-b">
                        <p className="bg-gray-100 px-3 py-3 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 448 512"
                          >
                            <path
                              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                              fill="#4B5563"
                            />
                          </svg>
                        </p>
                        <p className="ml-4">Full Name</p>
                      </div>
                      <Link
                        to="/profile"
                        className="block py-2 px-4 text-left text-gray-800 transition duration-500 hover:bg-gray-100"
                      >
                        View Profile
                      </Link>
                      <button
                        onClick={handleLogout} // Call the handleLogout function on click
                        className="block w-full py-2 px-4 text-left text-gray-800 transition duration-500 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link
                to={props.to}
                className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black"
              >
                {props.btn}
              </Link>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
}

Navbar.propTypes = {
  btn: PropTypes.string,
  to: PropTypes.string,
  textCol: PropTypes.string,
  bgCol: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};
