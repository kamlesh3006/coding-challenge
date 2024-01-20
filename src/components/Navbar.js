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
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-10 hover:text-white">Explore</a>
      <a className="mr-10 hover:text-white">Problems</a>
      <a className="mr-10 hover:text-white">Sign in</a>
    </nav>
  </div>
</header>
    </div>
  )
}
