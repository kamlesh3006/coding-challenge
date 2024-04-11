import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import { Link, useNavigate } from 'react-router-dom';

// Navbar
// navbar
import { Menu, X } from "lucide-react";
// import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

// For footer
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

import "../css/Explore.css";
import Footer from "./Footer";

const Explore = () => {
  
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the signin page or any other desired page
    navigate('/signin');
  };
  

  // NewNavbar
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <div className="">
      {/* <Navbar textCol="gray-700" bgCol="gray-100" to="/signin" btn="Sign in" onLogout={handleLogout} /> */}
      {/* Navbar new Start */}
      <div></div>
      {/* <nav className="  sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <a href="/" className="text-xl tracking-tight">CodeArena</a>
            </div>
            <ul className="hidden lg:flex ml-12  space-x-12">
              <a href="/explore">Explore </a>
              <a href="/problems">Problems </a>
              <a href="/#features">Features </a>
              <a href="/dummy">Dummy </a>
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="/signin" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="/signup"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              >
                Create an account
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                <a href="/explore">Explore </a> <br />
                <br />
                <a href="/problems">Problems </a> <br />
                <br />
                <a href="/dummy#features">Features </a> <br />
                <br />
                <a href="/dummy">Dummy </a> <br />
                <br />
              </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-3 border rounded-md">
                  Sign In
                </a>
                <a
                  href="#"
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav> */}

      {/* Navbar new End */}

      <Navbar textCol="gray-700" bgCol="gray-100" to="/signin" btn="Sign in" onLogout={handleLogout} />
      <section className="text-gray-600 mx-6 md:mx-24 body-font">
        <div className="container flex flex-wrap px-5 mx-auto items-center">
          <div className="text-start md:w-1/2 md:pr-12 md:py-8 md:border-b-0 mb-10 md:mb-0 pt-10">
            <p className="leading-relaxed text-gray-400 font-semibold">
              Welcome to
            </p>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 font-semibold text-gray-600">
              Coding Challenge Explore
            </h1>
          </div>
        </div>
      </section>
      <div className="DSA">
          <Cards topicTitle="Data Structures & Algorithms" currentTopic="DSA"/>
      </div>
      <div className="OOP">
          <Cards topicTitle="Object Oriented Programming" currentTopic="OOP"/>
      </div>
      <div className="SQL">
      <Cards topicTitle="FAQ'S" currentTopic="FAQ'S"/>
      </div>

     {/* Footer start */}
      <Footer/>
      {/* Footer End */}
    </div>
  );
};

export default Explore;
