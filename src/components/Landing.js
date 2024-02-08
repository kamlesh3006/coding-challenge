import React from 'react';
import '../css/Landing.css';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
      <Navbar to="/signin" btn="Sign in"/>
        <div className="diagonal-partition"></div>
        <div className="flex flex-col md:items-start">
            <div className="heading text-center">
                <p>A New Way to Learn</p>
            </div>
            <div className="intro text-center text-gray-500">
                <p>Coding Challenge is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
            </div>
            <div className="join mt-6 text-center">
              <Link to="/signup" className='bg-cyan-600 rounded-full md:ml-36 text-white py-2 px-4 transition duration-300 hover:bg-cyan-700 hover:scale-110 hover:-translate-y-1 text-left'>Create Account</Link>
            </div>
        </div>
    </div>
  )
}