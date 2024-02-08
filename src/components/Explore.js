import React, { useRef, useState } from 'react';
import Navbar from './Navbar';

const Explore = () => {
  const containerRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 350;
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 350;
  };

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  return (
    <div>
      <Navbar textCol="gray-700" bgCol="gray-100" to="/signin" btn="Sign in"/>
      <section class="text-gray-600 mx-6 md:mx-24 body-font">
  <div class="container flex flex-wrap px-5 mx-auto items-center">
    <div class="text-start md:w-1/2 md:pr-12 md:py-8 md:border-b-0 mb-10 md:mb-0 pt-10">
      <p class="leading-relaxed text-gray-400 font-semibold">Welcome to</p>
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 font-semibold text-gray-600">Coding Challenge</h1>
    </div>
  </div>
</section>
<section class="text-gray-600 mx-6 md:mx-24 body-font">
  <div class="container flex flex-wrap px-5 mx-auto items-center">
    <div class="text-start md:w-1/2 md:pr-12 md:py-8 md:border-b-0 mb-10 md:mb-0 pt-10">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 font-semibold text-gray-600">Data Structures and Algorithms</h1>
    </div>
  </div>
</section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div
            className="relative flex overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`absolute ${
                showButtons ? 'opacity-25' : 'opacity-0'
              } h-1/6 mx-6 md:mx-20 bg-gray-900 transition duration-300 hover:opacity-50 my-auto text-white font-bold text-2xl inset-y-0 left-0 px-4 rounded-lg `}
              onClick={scrollLeft}
              style={{ transition: 'opacity 0.3s ease-in-out' }}
            >
              &lt;
            </button>
            <div
              ref={containerRef}
              className="flex flex-nowrap space-x-1 overflow-x-hidden transition-transform duration-300 ease-in-out"
              // Apply transition to transform property
              style={{ scrollBehavior: 'smooth' }}
            >
              <div className="p-4" style={{ flex: '0 0 calc(100% / 5)' }}></div>
              {[...Array(12)].map((_, index) => (
                <div key={index} className="p-4" style={{ flex: '0 0 calc(100% / 5)' }}>
                  <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?coding`}
                      alt="blog"
                    />
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
              ))}
              <div className="p-4" style={{ flex: '0 0 calc(100% / 6)' }}></div>
            </div>
            <button
              className={`absolute ${
                showButtons ? 'opacity-25' : 'opacity-0'
              } mx-6 md:mx-20 h-1/6 transition duration-300 hover:opacity-50 my-auto text-center text-white font-bold text-2xl inset-y-0 right-0 bg-gray-900 px-4 rounded-lg`}
              onClick={scrollRight}
              style={{ transition: 'opacity 0.3s ease-in-out' }}
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
