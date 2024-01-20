import React from 'react';
import '../css/Landing.css';

export default function Landing() {
  return (
    <div>
        <div className="diagonal-partition"></div>
        <div className="flex flex-col">
            <div className="heading">
                <p>A New Way to Learn</p>
            </div>
            <div className="intro text-center text-gray-500">
                <p>Coding Challenge is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
            </div>
        </div>
    </div>
  )
}
