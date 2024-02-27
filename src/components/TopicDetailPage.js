import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import item from "./explore.json"; // Assuming 'item' is your JSON data
import '../css/TopicDetailPage.css'

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
        localStorage.removeItem('token');
        // Redirect the user to the signin page or any other desired page
        navigate('/signin');
    };

    let topicName = ""; // Declare topicName variable

    // Check if topicDetails is not null before accessing its properties
    if (topicDetails !== null) {
        // Assign the topic name based on the topicDetails
        if (topicDetails.topic === "DSA") {
            topicName = "Data Structures and Algorithms";
        } else if (topicDetails.topic === "OOP") {
            topicName = "Object Oriented Programming";
        } else if (topicDetails.topic === "SQL") {
            topicName = "Structured Query Language";
        } else {
            alert("Invalid Topic");
            navigate('/explore');
        }
    }

    return (
        <div>
            <Navbar textCol="gray-700" bgCol="gray-100" to="/signin" btn="Sign in" onLogout={handleLogout} />
            <div className="container bg-gray-100 mx-auto">
                {topicDetails ? (
                    <div>
                        {/* Background with gradient */}
                        <div className="background">
                            {/* Centered topic name */}
                            <div className="centered">{topicName}</div>
                        </div>
                        <h2 className="text-3xl text-gray-600 mt-8 font-bold mb-2">{topicDetails.sub_topic}</h2>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={topicDetails.image[0]}
                            style={{ maxHeight: '400px', width: 'auto' }}
                            alt="Your Image1"
                        />
                        </div>

                        {/* Render description with HTML tags */}
                        <div className="text-lg mt-6 text-gray-500 mx-64 text-left leading-loose" dangerouslySetInnerHTML={{ __html: topicDetails.description }} />
                        {/* Render other details of the topic */}
                        <h2 className="text-3xl text-gray-600 mt-8 font-semibold mb-2">Example</h2>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={topicDetails.image[1]}
                            style={{ maxHeight: '400px', width: 'auto' }}
                            alt="Your Image2"
                        />
                        </div>
                        <div className="text-lg mt-6 text-gray-500 mx-64 text-left leading-loose" dangerouslySetInnerHTML={{ __html: topicDetails.example }} />
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default TopicDetailPage;
