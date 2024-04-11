import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import profileImage from './profile.jpg'; // Adjust the path as needed
import Footer from './Footer';

export default function Profile() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the signin page or any other desired page
    navigate('/signin');
  };
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState(null);

  useEffect(() => {
    // Fetch user profile data from the backend when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users/current', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the authentication token
          },
        });
        console.log(response.data.user)
        setUserData(response.data.user); // Set user data in state
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  // Function to toggle edit mode
  const toggleEditMode = () => {
    if (!editMode) {
      // Enter edit mode, initialize editedUserData with userData
      setEditedUserData(userData);
    } else {
      // Exit edit mode
      setEditedUserData(null);
    }
    setEditMode(prevEditMode => !prevEditMode);
  };

  // Function to save changes
  const saveChanges = async () => {
    try {
      await axios.put('http://localhost:3001/api/users/edit', editedUserData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(userData)
      setUserData(editedUserData); // Update userData with editedUserData
      console.log(userData)
      toggleEditMode(); // Exit edit mode
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div>
        <Navbar textCol="gray-700" bgCol="gray-100" onLogout={handleLogout}/>
        <div style={{ 
          display: "flex",
          justifyContent: "center"
        }}>
          <div style={{ 
            background: "linear-gradient(180.2deg, rgb(30, 33, 48) 6.8%, rgb(74, 98, 110) 131%)", 
            width: "100%", 
            height: "40vh", 
            position: "relative"
          }}></div>
        </div>
        <div className="bg-white overflow shadow-xl w-1/2 -mt-16 rounded-lg border" style={{ 
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)"
        }}>
          {userData && (
          <>
            {/* Profile picture */}
            <div className="mx-auto w-48 h-48 relative -mt-24 border-4 border-white rounded-full overflow-hidden">
              <img className="object-cover object-center h-48" src={profileImage} alt="Profile" />
            </div>

            {/* User details */}
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                <button onClick={toggleEditMode}>Edit Profile ✍️</button>
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editMode ? (
                      <input
                        type="text"
                        name="fullname"
                        value={`${editedUserData.firstname} ${editedUserData.lastname}`}
                        onChange={handleChange}
                      />
                    ) : (
                      `${userData.firstname} ${userData.lastname}`
                    )}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editMode ? (
                      <input
                        type="email"
                        name="email"
                        value={editedUserData.email}
                        onChange={handleChange}
                        disabled
                      />
                    ) : (
                      userData.email
                    )}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Year
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editMode ? (
                      <input
                        type="text"
                        name="year"
                        value={editedUserData.year}
                        onChange={handleChange}
                      />
                    ) : (
                      userData.year
                    )}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Branch
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editMode ? (
                      <input
                        type="text"
                        name="branch"
                        value={editedUserData.branch}
                        onChange={handleChange}
                      />
                    ) : (
                      userData.branch
                    )}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Role
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editMode ? (
                      <input
                        type="text"
                        name="role"
                        value={editedUserData.role}
                        onChange={handleChange}
                        disabled
                      />
                    ) : (
                      userData.role
                    )}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Date of Birth
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editMode ? (
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={editedUserData.dateOfBirth ? editedUserData.dateOfBirth.split('T')[0] : ''} // Extracting date only if it exists
                        onChange={handleChange}
                      />
                    ) : (
                      userData.dateOfBirth ? userData.dateOfBirth.split('T')[0] : '' // Extracting date only if it exists
                    )}
                  </dd>


                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Phone Number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editMode ? (
                      <input
                        type="text"
                        name="phoneNumber"
                        value={editedUserData.phoneNumber}
                        onChange={handleChange}
                      />
                    ) : (
                      userData.phoneNumber
                    )}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editMode ? (
                      <input
                        type="text"
                        name="address"
                        value={editedUserData.address}
                        onChange={handleChange}
                      />
                    ) : (
                      userData.address
                    )}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    LinkedIn
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editMode ? (
                      <input
                        type="text"
                        name="linkedinLink"
                        value={editedUserData.linkedinLink}
                        onChange={handleChange}
                      />
                    ) : (
                      <Link to={userData.linkedinLink}>{userData.linkedinLink}</Link>
                    )}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Skills / Interests
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editMode ? (
                      <input
                        type="text"
                        name="skillsOrInterest"
                        value={editedUserData.skillsOrInterests}
                        onChange={handleChange}
                      />
                    ) : (
                      userData.skillsOrInterests
                    )}
                  </dd>
                </div>
              </dl>
            </div>
            {editMode && (
              <button className='py-4 px-24 rounded-xl mb-6 text-white' style={{background: "linear-gradient(180.2deg, rgb(30, 33, 48) 6.8%, rgb(74, 98, 110) 131%)"}} onClick={saveChanges}>Save</button>
            )}
          </>
        )}
      </div>
      <Footer/>
    </div>
  );
}
