import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";

export default function Problems() {
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
                Coding Challenge Problem Set
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
      </div>
  );
};
