import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export default function AdminUsers() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (userRole === 'admin') {
            fetchUsersData();
        }
    }, [userRole]);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:3001/api/users/current', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUserRole(response.data.user.role);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchUsersData = async () => {
        try {
            const token = localStorage.getItem('token');
            const usersResponse = await axios.get('http://localhost:3001/api/users/viewProfileall', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(usersResponse.data.users);
        } catch (error) {
            setError(error);
        }
    };


    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:3001/api/users/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // After successful deletion, fetch updated users data
            fetchUsersData();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!(userRole === 'admin')) {
        return <div>You do not have permission to access this page.</div>;
    }
    let count = 0;
    return (
        <div className="bg-gray-100 text-gray-600 min-h-screen">
            <AdminNavbar btn="Add User" to="/add" />
            <div className="container shadow-lg mx-auto mt-4 max-w-screen-xl">
                <div className="overflow-x-auto">
                    <div className="mx-auto">
                        <div className="shadow-md">
                            <table className="w-full border-md bg-white rounded-lg text-center">
                                <thead className="text-left">
                                    <tr>
                                        <th colSpan={6} className="px-6 py-3 text-lg border-gray-300">Users List</th>
                                    </tr>
                                </thead>
                                <thead className="text-left bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-center border-gray-300">Sr. No.</th>
                                        <th className="px-6 py-3 text-center border-gray-300">Username</th>
                                        <th className="px-6 py-3 text-center border-gray-300">Email</th>
                                        <th className="px-6 py-3 text-center border-gray-300">Year</th>
                                        <th className="px-6 py-3 text-center border-gray-300">Branch</th>
                                        <th className="px-6 py-3 text-center border-gray-300">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-2 text-center border-y whitespace-nowrap">{++count}</td>
                                            <td className="px-6 py-2 text-center border-y whitespace-nowrap">{item.firstname} {item.lastname}</td>
                                            <td className="px-6 py-2 text-center border-y whitespace-nowrap">{item.email}</td>
                                            <td className="px-6 py-2 text-center border-y whitespace-nowrap">{item.year}</td>
                                            <td className="px-6 py-2 text-center border-y whitespace-nowrap">{item.branch}</td>
                                            <td className="px-6 py-2 text-center border-y whitespace-nowrap flex justify-center">
                                                <Link to={`/edit-user?userId=${item.id}`} className="bg-blue-500 mr-1 hover:bg-blue-600 text-gray-100 font-bold py-2 px-4 rounded flex items-center">
                                                    <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff" }} />
                                                </Link>
                                                <button onClick={() => handleDelete(item.id)} className="bg-red-500 ml-1 hover:bg-red-600 text-gray-100 font-bold py-2 px-4 rounded flex items-center">
                                                    <FontAwesomeIcon icon={faTrashAlt} style={{ color: "#ffffff" }} />
                                                </button>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
