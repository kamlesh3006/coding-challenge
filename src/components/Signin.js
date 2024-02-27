import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import googleLogo from './google.png';
import githubLogo from './github.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    // Check if the user is already authenticated (e.g., if a token exists in local storage)
    const isAuthenticated = localStorage.getItem('token');
    if (isAuthenticated) {
      // Redirect to the explore page if the user is already authenticated
      navigate('/explore');
    }
  }, [navigate]);

  // Define logout function
  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the signin page or any other desired page
    navigate('/signin');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/users/login", formData);
      console.log(response.data); // Log the response from the backend
      // Store the authentication token in local storage
      localStorage.setItem('token', response.data.token);
  
      // Check if the role is 'admin'
      if (response.data.role === 'admin') {
        // Redirect the user to the admin dashboard
        navigate('/admin-questions');
      } else {
        // Redirect the user to another page after successful login
        navigate('/explore');
      }
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status === 401) {
              // Unauthorized (wrong email or password)
              alert("Invalid email or password");
            } else {
              // Other error status codes
              alert("An error occurred. Please try again later.");
            }
            console.error(error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            alert("No response received from the server. Please try again later.");
            console.error(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            alert("An unexpected error occurred. Please try again later.");
            console.error("Error", error.message);
          }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 const googleLogin=()=>{
  window.open("http://localhost:3001/api/users/auth/google", "_self");
 }
  return (
    <div>
      <Navbar to="/signup" btn="Sign up" onLogout={handleLogout} /> {/* Pass the logout function as a prop */}
      <div className="diagonal-partition"></div>
      <section className="md:-my-20 my-32">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white shadow-lg md:mt-0 sm:max-w-md">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 block w-full p-2.5" placeholder="Your email" required=""/>
                </div>
                <div>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 block w-full p-2.5 " required=""/>
                </div>
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet? <Link to="/signup" className="font-medium text-blue-600 hover:underline">Sign up</Link>
                </p>
                <p className="text-sm font-light text-gray-500">
                  or you can sign in with
                </p>
                <div className='flex'>
                  <button type="button" className="flex items-center justify-center w-1/2 ml-1 text-gray-600 border hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={googleLogin}><img src={googleLogo} alt='Google Logo' className='h-6 w-6 mr-2' />Google</button>
                  <button type="submit" className="flex items-center justify-center w-1/2 ml-1 text-gray-600 border hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><img src={githubLogo} alt='Google Logo' className='h-6 w-6 mr-2'/>Github</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
