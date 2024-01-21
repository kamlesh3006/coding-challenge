import React from 'react';
import '../css/Landing.css';

export default function Landing() {
  return (
    <div>
        <div className="diagonal-partition"></div>
        <div className="flex flex-col md:items-start">
            <div className="heading text-center">
                <p>A New Way to Learn</p>
            </div>
            <div className="intro text-center text-gray-500">
                <p>Coding Challenge is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
            </div>
            <div className="join mt-6 text-center w-50">
              <button className='bg-cyan-600 rounded-full text-white py-2 px-4 transition duration-300 hover:bg-cyan-700 hover:scale-110 hover:-translate-y-1 text-left'>Sign in / Join</button>
            </div>
        </div>
    </div>
  )
}
