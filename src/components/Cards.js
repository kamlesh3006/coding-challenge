import React from "react";
import { useRef, useState } from "react";
import item from "./explore.json";
import { Link } from "react-router-dom";
import '../css/Cards.css';
import Proptypes from "prop-types";

const Cards = (props) => {
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
  const currentTopic = props.currentTopic;
  return (
    <div>
      <section className="text-gray-600 mx-6 md:mx-24 body-font">
        <div className="container flex flex-wrap px-5 mx-auto items-center">
          <div className="text-start md:w-1/2 md:pr-12 md:py-8 md:border-b-0 mb-10 md:mb-0 pt-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 font-semibold text-gray-600">
              { props.topicTitle }
            </h1>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font mb-24">
        <div className="container mx-auto">
          <div
            className="relative flex overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`absolute ${
                showButtons ? "opacity-25" : "opacity-0"
              } h-1/6 mx-6 md:mx-20 bg-gray-900 transition duration-300 hover:opacity-50 my-auto text-white font-bold text-2xl inset-y-0 left-0 px-4 rounded-2xl z-10`}
              onClick={scrollLeft}
              style={{ transition: "opacity 0.3s ease-in-out" }}
            >
              &lt;
            </button>
            <div
              ref={containerRef}
              className="flex flex-nowrap space-x-1 overflow-x-hidden transition-transform duration-300 ease-in-out"
              style={{ scrollBehavior: "smooth" }}
            >
              <div className="p-4" style={{ flex: "0 0 250px" }}></div>
              {item.map((card) => ( card.topic === currentTopic &&
              
                <div
                  key={card.id}
                  className="p-4 relative"
                  style={{ flex: "0 0 300px" }}
                >
                  <div className="cardsEle h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden relative">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`https://source.unsplash.com/720x400/?class`}
                      alt="image"
                    />
                    <div
                      id="cardsEle"
                      className="bg-white flex items-center justify-center rounded-full z-1 border-4 transition duration-500 hover:shadow-lg absolute left-5 top-3/5 transform translate-x-40 -translate-y-1/2"
                      style={{ height: "70px", width: "70px" }}
                    ><Link key={card.id} to={`/topic/${card.id}`}>
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
                      </svg></Link>
                    </div>
                    <div className="p-5 text-start">
                      <h2 className="text-xs title-font font-medium text-gray-400">
                        {card.topic}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900">
                        {card["sub_topic"]}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            <div className="p-4" style={{ flex: "0 0 250px" }}></div>
          </div>
          <button
            className={`absolute ${
              showButtons ? "opacity-25" : "opacity-0"
            } mx-6 md:mx-20 h-1/6 transition duration-300 hover:opacity-50 my-auto text-center text-white font-bold text-2xl inset-y-0 right-0 bg-gray-900 px-4 rounded-2xl z-10`}
            onClick={scrollRight}
            style={{ transition: "opacity 0.3s ease-in-out" }}
          >
            &gt;
          </button>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
