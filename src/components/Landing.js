import React from "react";
// navbar
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

// herosection or section 1
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/Homepage_Black.mp4";

// Features
import { features } from "../constants";

// Workflow
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

// Testimonials
import { testimonials } from "../constants";

// Footer
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

import "../css/Landing.css";

export default function Landing(props) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <div className="landing-page">
      {/* Navbar start */}
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <a href="/" className="text-xl tracking-tight">CodeArena</a>
            </div>
            <ul className="hidden lg:flex ml-12  space-x-12">
              {/* {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))} */}
              <a href="/explore">Explore </a>
              <a href="/problems">Problems </a>
              <a href="/compiler">Compiler</a>
              <a href="/#features">Features </a>
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
                {/* {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))} */}
                <a href="/explore">Explore </a> <br />
                <br />
                <a href="/problems">Problems </a> <br />
                <br />
                <a href="/dummy#features">Features </a> <br />
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
      </nav>
      {/* Navbar End */}

      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* Section 1 or Herosection Start */}

        <div className="flex flex-col items-center mt-6 lg:mt-20 ">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Welcome to
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              {" "}
              CodeArena
              <br />
              <br />{" "}
            </span>
            {/* A New Way to Learn Coding ! */}
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-100 max-w-4xl">
            CodeArena is the best platform to help you enhance your skills,
            expand your knowledge and prepare for technical interviews
          </p>
          <div className="flex justify-center my-10">
            <a
              href="/signup"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
            >
              Start for free
            </a>
            <a href="/explore" className="py-3 px-4 mx-3 rounded-md border">
              Explore Now
            </a>
          </div>
          <div className="flex mt-10 justify-center ">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Section 1 or Herosection End */}

        {/* Section 2 Features section START*/}

        <div
          id="features"
          className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
        >
          <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-m font-medium px-2 py-1 uppercase">
              Features
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
              Easily learn{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                Programming
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                <div className="flex">
                  <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                    <p className="text-md p-2 mb-20 text-neutral-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/*Testing 
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
        </div>

        {/* Section 2 Features section END */}

        {/* Section or Workflow Start */}

        <div className="mt-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
            Accelerate your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Learning.
            </span>
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
              <img src={codeImg} alt="Coding" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex mb-12">
                  <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                    <CheckCircle2 />
                  </div>
                  <div>
                    <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                    <p className="text-md text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section or Workflow End */}

        {/* Section 4 0r Testimonials Start */}

        <div className="mt-20 tracking-wide ">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
            What People are saying
          </h2>
          <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                  <p>{testimonial.text}</p>
                  <div className="flex mt-8 items-start">
                    <img
                      className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                      src={testimonial.image}
                      alt=""
                    />
                    <div>
                      <h6>{testimonial.user}</h6>
                      <span className="text-sm font-normal italic text-neutral-600">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 0r Testimonials Start */}

        {/* Footer start */}

        <footer className="mt-20 border-t py-10 border-neutral-700">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div >
              <p className="text-4xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">CodeArena</p>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info@codearena.com"
                    className="text-neutral-300 hover:text-white"
                  >
                    info@codearena.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-neutral-300 hover:text-white"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li>
                  <p className="text-neutral-300">
                    123 CodeArena, Nashik, Maharashtra
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
          <p className="text-neutral-300 text-center mt-6">
            © {new Date().getFullYear()} CodeArena. All rights reserved.
          </p>
        </footer>

        {/* Footer End */}
      </div>
    </div>
  );
}
