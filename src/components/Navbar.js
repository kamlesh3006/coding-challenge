import React from 'react';
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <div>
      <header className="navbar lg:mx-36 text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img src="./logo.jpg" alt="Logo" className='logo-image'/>
      <span className="ml-10 text-xl">Coding</span>
    </p>
    <nav className="md:ml-auto flex font-thin flex-wrap items-center text-base justify-center">
      <button className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black">Explore</button>
      <button className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black">Problems</button>
      <button className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black">Sign in</button>
    </nav>
  </div>
</header>
    </div>
  )
}
