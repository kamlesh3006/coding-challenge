import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import background from "./header.png";
import item from "./explore.json"; // Assuming 'item' is your JSON data
import "../css/TopicDetailPage.css";

const TopicDetailPage = () => {
  const navigate = useNavigate();
  const { topicId } = useParams(); // Assuming you have the topicId in the URL params
  const [topicDetails, setTopicDetails] = useState(null);

  useEffect(() => {
    // Parse the topicId to an integer
    const parsedTopicId = parseInt(topicId);

    // Find the topic by ID
    const topic = item.find((topic) => parseInt(topic.id) === parsedTopicId);

    console.log("Parsed Topic ID:", parsedTopicId);
    console.log("Topic found:", topic);
    setTopicDetails(topic);
  }, [topicId]);

  useEffect(() => {
    console.log("Updated topicDetails:", topicDetails);
  }, [topicDetails]);

  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem("token");
    // Redirect the user to the signin page or any other desired page
    navigate("/signin");
  };

  let topicName = ""; // Declare topicName variable

  // Check if topicDetails is not null before accessing its properties
  if (topicDetails !== null) {
    // Assign the topic name based on the topicDetails
    if (topicDetails.topic === "DSA") {
      topicName = "Data Structures and Algorithms";
    } else if (topicDetails.topic === "OOP") {
      topicName = "Object Oriented Programming";
    } else if (topicDetails.topic === "FAQ'S") {
      topicName = "Frequently Asked Questions";
    } else {
      alert("Invalid Topic");
      navigate("/explore");
    }
  }
  // className="text-4xl text-gray-100 mt-6 font-bold mb-10"
  return (
    <div>
      <Navbar
        textCol="gray-700"
        bgCol="gray-100"
        to="/signin"
        btn="Sign in"
        onLogout={handleLogout}
      />
      <div className="container bg-gray-100 mx-auto">
        {topicDetails ? (
          <div>
            {/* Background with gradient */}
            <div className="background">
              {/* Centered topic name */}
              <div className="centered ">{topicName}</div>
            </div>
            <div className="centered">
              <h1>{topicDetails.sub_topic}</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={topicDetails.image[0]}
                style={{ maxHeight: "400px", width: "auto" }}
                className="mt-28 mb-14"
                alt="Topic Image1"
              />
            </div>

            {/* Render description with HTML tags */}
            <div
              className="text-lg mt-6 text-gray-900 mx-64 text-left leading-loose "
              dangerouslySetInnerHTML={{ __html: topicDetails.description }}
            />
            {/* Render other details of the topic */}
            <h2 className="text-3xl text-gray-900 mt-8 mb-4 font-semibold ">
              Example
            </h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="mt-4 mb-4"
                src={topicDetails.image[1]}
                style={{ maxHeight: "400px", width: "auto" }}
                alt="Example Image2"
              />
            </div>
            <div
              className="text-lg mt-6 pb-60 text-gray-900 mx-64 text-left leading-loose"
              dangerouslySetInnerHTML={{ __html: topicDetails.example }}
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Footer start */}
      <div className="footer ">
        <div className="max-w-7xl mx-auto pt-50 px-6">
          <footer className="mt-20 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="text-4xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                  CodeArena
                </p>
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
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
};

export default TopicDetailPage;
