import React from 'react';
import '../css/Navbar.css';
import Proptypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <header className={`navbar lg:px-36 text-${props.textCol === 'gray-700'?'gray-700':'white'} bg-${props.bgCol === 'gray-100'?'gray-100':''}`}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/">
      <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img src="./logo.jpg" alt="Logo" className='logo-image'/>
        <span className={`ml-10 text-${props.textCol === 'gray-700'?'gray-700':'white'} text-xl`}>Coding</span>
      </p>
    </Link>
    <nav className="md:ml-auto flex font-thin flex-wrap items-center text-base justify-center">
      <Link to="/explore" className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black">Explore</Link>
      <Link to="/problems" className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black">Problems</Link>
      <Link to={props.to} className="ml-4 mr-8 py-1 px-4 transition duration-500 rounded-full hover:bg-white hover:text-black">{props.btn}</Link>
    </nav>
  </div>
</header>
    </div>
  )
}
Navbar.propTypes = {
  btn: Proptypes.string,
  to: Proptypes.string,
};