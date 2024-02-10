import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import '../css/Explore.css';

const Explore = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const [showButtons1, setShowButtons1] = useState(false);
  const [showButtons2, setShowButtons2] = useState(false);

  const scrollLeft1 = () => {
    containerRef1.current.scrollLeft -= 350;
  };

  const scrollRight1 = () => {
    containerRef1.current.scrollLeft += 350;
  };

  const scrollLeft2 = () => {
    containerRef2.current.scrollLeft -= 350;
  };

  const scrollRight2 = () => {
    containerRef2.current.scrollLeft += 350;
  };

  const handleMouseEnter1 = () => {
    setShowButtons1(true);
  };

  const handleMouseLeave1 = () => {
    setShowButtons1(false);
  };

  const handleMouseEnter2 = () => {
    setShowButtons2(true);
  };

  const handleMouseLeave2 = () => {
    setShowButtons2(false);
  };

  return (
    <div>
      <Navbar textCol="gray-700" bgCol="gray-100" to="/signin" btn="Sign in" />
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
        <section className="text-gray-600 mx-6 md:mx-24 body-font">
          <div className="container flex flex-wrap px-5 mx-auto items-center">
            <div className="text-start md:w-1/2 md:pr-12 md:py-8 md:border-b-0 mb-10 md:mb-0 pt-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 font-semibold text-gray-600">
                Data Structures and Algorithms
              </h1>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto">
            <div
              className="relative flex overflow-hidden"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <button
                className={`absolute ${
                  showButtons1 ? "opacity-25" : "opacity-0"
                } h-1/6 mx-6 md:mx-20 bg-gray-900 z-10 transition duration-300 hover:opacity-50 my-auto text-white font-bold text-2xl inset-y-0 left-0 px-4 rounded-2xl `}
                onClick={scrollLeft1}
                style={{ transition: "opacity 0.3s ease-in-out" }}
              >
                &lt;
              </button>
              <div
                ref={containerRef1}
                className="flex flex-nowrap space-x-1 overflow-x-hidden transition-transform duration-300 ease-in-out"
                style={{ scrollBehavior: "smooth" }}
              >
                <div className="p-4" style={{ flex: "0 0 250px" }}></div>
                <div className="p-4 relative" style={{ flex: "0 0 300px" }}>
                  <div className="OOP-ele h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="blog"
                    />
                    <div id="OOP-ele" className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2" style={{ height: "70px", width: "70px"}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8 fill-current"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16" />
                      </svg>
                    </div>

                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                        DSA
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        Arrays
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-4 relative" style={{ flex: "0 0 300px" }}>
                  <div className="OOP-ele h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="blog"
                    />
                    <div id="OOP-ele" className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2" style={{ height: "70px", width: "70px"}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8 fill-current"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16" />
                      </svg>
                    </div>

                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                      DSA
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        Stack
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-4 relative" style={{ flex: "0 0 300px" }}>
                  <div className="OOP-ele h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="blog"
                    />
                    <div id="OOP-ele" className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2" style={{ height: "70px", width: "70px"}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8 fill-current"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16" />
                      </svg>
                    </div>

                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                      DSA
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        Queue
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-4 relative" style={{ flex: "0 0 300px" }}>
                  <div className="OOP-ele h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="blog"
                    />
                    <div id="OOP-ele" className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2" style={{ height: "70px", width: "70px"}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8 fill-current"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16" />
                      </svg>
                    </div>

                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                      DSA
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        Linked List
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-4 relative" style={{ flex: "0 0 300px" }}>
                  <div className="OOP-ele h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="blog"
                    />
                    <div id="OOP-ele" className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2" style={{ height: "70px", width: "70px"}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8 fill-current"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16" />
                      </svg>
                    </div>

                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                      DSA
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        Loops
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-4 relative" style={{ flex: "0 0 300px" }}>
                  <div className="OOP-ele h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="blog"
                    />
                    <div id="OOP-ele" className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2" style={{ height: "70px", width: "70px"}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8 fill-current"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16" />
                      </svg>
                    </div>

                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                      DSA
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        Conditional Statements
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-4" style={{ flex: "0 0 250px" }}></div>
              </div>
              <button
                className={`absolute ${
                  showButtons1 ? "opacity-25" : "opacity-0"
                } mx-6 md:mx-20 h-1/6 transition z-10 duration-300 hover:opacity-50 my-auto text-center text-white font-bold text-2xl inset-y-0 right-0 bg-gray-900 px-4 rounded-2xl`}
                onClick={scrollRight1}
                style={{ transition: "opacity 0.3s ease-in-out" }}
              >
                &gt;
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="OOP relative">
        <section className="text-gray-600 mx-6 md:mx-24 body-font">
          <div className="container flex flex-wrap px-5 mx-auto items-center">
            <div className="text-start md:w-1/2 md:pr-12 md:py-8 md:border-b-0 mb-10 md:mb-0 pt-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 font-semibold text-gray-600">
                Object Oriented Programming
              </h1>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font mb-24">
          <div className="container mx-auto">
            <div
              className="relative flex overflow-hidden"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <button
                className={`absolute ${
                  showButtons2 ? "opacity-25" : "opacity-0"
                } h-1/6 mx-6 md:mx-20 bg-gray-900 transition duration-300 hover:opacity-50 my-auto text-white font-bold text-2xl inset-y-0 left-0 px-4 rounded-2xl z-10`}
                onClick={scrollLeft2}
                style={{ transition: "opacity 0.3s ease-in-out" }}
              >
                &lt;
              </button>
              <div
                ref={containerRef2}
                className="flex flex-nowrap space-x-1 overflow-x-hidden transition-transform duration-300 ease-in-out"
                style={{ scrollBehavior: "smooth" }}
              >
                <div className="p-4" style={{ flex: "0 0 250px" }}></div>
                <div className="p-4 relative" style={{ flex: "0 0 300px" }}>
                  <div className="OOP-ele h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="blog"
                    />
                    <div id="OOP-ele" className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2" style={{ height: "70px", width: "70px"}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8 fill-current"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16" />
                      </svg>
                    </div>

                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                        OOP
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        Class
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="p-4 relative" style={{ flex: "0 0 300px" }}>
                  <div className="OOP-ele h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="blog"
                    />
                    <div id="OOP-ele" className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2" style={{ height: "70px", width: "70px"}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8 fill-current"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16" />
                      </svg>
                    </div>

                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                        OOP
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        Objects
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-4 relative" style={{ flex: "0 0 300px" }}>
                  <div className="OOP-ele h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="blog"
                    />
                    <div id="OOP-ele" className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2" style={{ height: "70px", width: "70px"}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8 fill-current"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16" />
                      </svg>
                    </div>

                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                        OOP
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        Constructor
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-4 relative" style={{ flex: "0 0 300px" }}>
                  <div className="OOP-ele h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="blog"
                    />
                    <div id="OOP-ele" className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2" style={{ height: "70px", width: "70px"}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8 fill-current"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16" />
                      </svg>
                    </div>

                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                        OOP
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        Functions
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-4 relative" style={{ flex: "0 0 300px" }}>
                  <div className="OOP-ele h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="blog"
                    />
                    <div id="OOP-ele" className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2" style={{ height: "70px", width: "70px"}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8 fill-current"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16" />
                      </svg>
                    </div>

                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                        OOP
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        Inheritance
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-4 relative" style={{ flex: "0 0 300px" }}>
                  <div className="OOP-ele h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="blog"
                    />
                    <div id="OOP-ele" className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2" style={{ height: "70px", width: "70px"}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 h-8 fill-current"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16" />
                      </svg>
                    </div>

                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                        OOP
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        Polymorphism
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="p-4" style={{ flex: "0 0 250px" }}></div>
              </div>
              <button
                className={`absolute ${
                  showButtons2 ? "opacity-25" : "opacity-0"
                } mx-6 md:mx-20 h-1/6 transition duration-300 hover:opacity-50 my-auto text-center text-white font-bold text-2xl inset-y-0 right-0 bg-gray-900 px-4 rounded-2xl z-10`}
                onClick={scrollRight2}
                style={{ transition: "opacity 0.3s ease-in-out" }}
              >
                &gt;
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
